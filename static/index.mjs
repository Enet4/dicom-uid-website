import { default as init, gen_uid } from "./wasm/dicom-gen-uid.js";

// initialize the wasm module
await init();

function generate() {
    // get the text box
    let txt_uid = document.getElementById("txt_uid");
    // get the uid
    let uid = gen_uid();
    // set the uid
    txt_uid.value = uid;
}
document.getElementById("btn").addEventListener("click", generate);

async function copyToClipboard() {
    // get the text box
    let txt_uid = document.getElementById("txt_uid");

    await navigator.clipboard.writeText(txt_uid.value);

    // signal the user that it's copied
    let btn_copy = document.getElementById("btn_copy");
    btn_copy.innerText = "Copied!";

    // reset after a while
    setTimeout(() => {
        btn_copy.innerText = "Copy";
    }, 1000);
}
document.getElementById("btn_copy").addEventListener("click", copyToClipboard);
