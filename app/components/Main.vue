<template>
    <Page @loaded="start">
        <ActionBar flat="true" title="Start">
            <NavigationButton/>
        </ActionBar>
       <StackLayout>
          <Label class="total" :text="items.length + ' Items'"></Label>
          <ListView top="20" for="item in items" height="100%" separatorColor="transparent">
            <v-template>
              <StackLayout class="item">
                <Label :text="item.data.name" />
                <Label :text="item.data.description" />
                <Label text="" />
              </StackLayout>
            </v-template>
          </ListView>
        </StackLayout>
    </Page>
</template>

<script>
import { storage } from "../schmucklicloud_service";
import Routing from "../routing";
const appSettings = require("application-settings");

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    start(){
      var session_token = appSettings.getString("session_token", undefined);
      if(session_token !== undefined) {
        storage.setAuthToken(session_token);
        storage.getAll("items").then(function(response){
          if(response.isOK){
            this.items = response.data;
          }
        }.bind(this));
      } else {
        var global_this = this;
        alert("You are not authorized")
            .then(() => {
              global_this.$navigateTo(Routing.login, {
                clearHistory: true,
                backstackVisible: true,
              });
            });
      }
    }
  }
}
</script>

<style scoped>
    ActionBar {
        background-color: white;
        color: #000;
    }

    Label {
      color: black;
      font-size: 20px;
    }

    ListView {
      color: black;
    }

    .item {
      padding: 30px;
    }

    .total {
      margin: 30px;
    }

    .list_item {
      margin-bottom: 30px;
    }

    FlexboxLayout {
      background: #ffffff
    }
</style>
