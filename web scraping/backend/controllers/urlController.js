const request = require("request-promise");
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = {
  async getInfoChi(req, res) {
    try {
      const {url} = req.body;
      //console.log(url);
      const html = await request(url);
      const $ = cheerio.load(html);
      const info = [];
      $("div[id='additional_information'] > div[class='row fichrow']").each(
        (index, elm) => {
          const title = $(elm)
            .find("div[class='col-md-7'] > span")
            .text()
            .trim();
          const value = $(elm)
            .find("div[class='col-md-17'] > span")
            .text()
            .trim();
          info.push({ title, value });
        }
      );
      res.send(info);
    } catch (error) {
      res.status(500).send({
        error: "Internal Server Error",
      });
    }
  },
  async getInfoGaj(req, res) {
    try {
    const {url} = req.body;
    const html = await request(url);
    const $ = cheerio.load(html);
    const elm = $("div[class='product-review-box'] > a").attr("href");
    const info = elm.split("/");
    const productId = info[3];
    const attributes = (await axios.get(`https://www.gajmarket.com/api/v1/product/${productId}/attributes`)).data;
    res.send(attributes);
    } catch(error) {
      res.status(500).send({
        error: "Internal Server Error",
      });
    }


  }
};
