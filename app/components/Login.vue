<template>
    <Page>
        <ActionBar flat="true" title="Login"/>
        <AbsoluteLayout>
          <FlexboxLayout top="130" width="100%" flexDirection="column">
            <TextField v-model="email" hint="Email" />
            <TextField v-model="password" secure="true" hint="Password" />
            <Button text="Login" @tap="onLogin" />
          </FlexboxLayout>
        </AbsoluteLayout>
    </Page>
</template>

<script>
import { auth } from "../schmucklicloud_service";
import Routing from "../routing";
const appSettings = require("application-settings");

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin(){
      var global_this = this;
      console.log(this.email, this.password);
      auth.authorizeEmailPassword(this.email, this.password).then(function(response){
        if(response.isOK){
          appSettings.setString("session_token", response.data.session_token);
          alert('Authorization successful.')
          .then(() => {
            global_this.$navigateTo(Routing.main, {
              clearHistory: true,
              backstackVisible: true,
            });
          });
        } else {
          alert(response.message)
          .then(() => {
            console.log("Alert dialog closed.");
          });
        }
      });
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

    Button {
      margin: 30px;
      padding: 30px;
      border-radius: 25px;
      color: white;
      font-size: 25px;
      text-transform: capitalize;
      background-color: #8989bb;
      background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
    }

    TextField {
      background: rgb(241, 241, 241);
      font-size: 25px;
      padding: 30px;
      margin: 30px;
      border-radius: 25px;
      border: 2px solid black;
      width: 100%;
    }
</style>
