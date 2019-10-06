<template>
    <Page @loaded="start">
        <ActionBar flat="true" title="Start">
            <NavigationButton/>
        </ActionBar>
        <FlexboxLayout top="30" flexDirection="column">
          <ActivityIndicator busy="true" @busyChange="onBusyChanged" />
        </FlexboxLayout>
    </Page>
</template>

<script>
import { storage } from "../schmucklicloud_service";
import Routing from "../routing";
const appSettings = require("application-settings");

export default {
  data() {
    return {

    }
  },
  methods: {
    start(){
      var session_token = appSettings.getString("session_token", undefined);
      console.log(session_token);
      if(session_token !== undefined) {
        alert(session_token)
            .then(() => {
              console.log("Alert dialog closed.");
            });
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

    FlexboxLayout {
      background: #ffffff
    }
</style>
