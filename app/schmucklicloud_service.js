import { sCAuth } from "schmucklicloud_auth";
import { sCStorage } from "schmucklicloud_storage";

const app_id = "407292a0ed564bead59023fa96603c5c6a9553d3";
const app_secret = "66d7549b440fe6b36287f5f8800f68cd681a6c6439f3915040e60f9a06e0d6f6";

let ref_auth = new sCAuth(app_id, app_secret);
let ref_storage = new sCStorage(app_id, app_secret);

storage.setBucket(16);

export {ref_auth as auth, ref_storage as storage};