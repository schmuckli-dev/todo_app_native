<template>
    <Page @loaded="start">
        <ActionBar flat="true" title="Start">
            <NavigationButton/>
        </ActionBar>
       <AbsoluteLayout>
          <FlexboxLayout top="130" width="100%" flexDirection="column">
            <Label :text="items.length + ' Items'"></Label>
            <ListView for="item in items">
              <v-template>
                <Label :text="item.data.name" />
              </v-template>
            </ListView>
          </FlexboxLayout>
        </AbsoluteLayout>
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

    FlexboxLayout {
      background: #ffffff
    }
</style>
