use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn gen_uid() -> String {
    dicom_gen_uid::gen_uid()
}
