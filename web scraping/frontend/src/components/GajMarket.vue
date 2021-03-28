<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-form>
        <v-container>
          <v-col>
            <v-text-field
              v-model="url"
              name="url"
              label="url - gajmarket"
              required
            ></v-text-field>
            <v-btn class="mr-4" @click="send">
              Send
            </v-btn>
          </v-col>
        </v-container>
      </v-form>
    </v-card>
    <br />
    <v-simple-table v-if="isClick">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              مشخصات کالا
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in attributes" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-flex>
</template>

<script>
import urlService from "../services/urlService";
export default {
  data() {
    return {
      url: "",
      attributes: null,
      isClick: false,
    };
  },
  methods: {
    async send() {
      try {
        this.attributes = (await urlService.getInfoGaj({ url: this.url })).data;
        this.isClick = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
