#!/usr/bin/env sh
set -eu
cargo build --release --target wasm32-unknown-unknown

mkdir -p ./static/wasm
wasm-bindgen --out-name dicom-gen-uid \
    --out-dir static/wasm \
    --target web target/wasm32-unknown-unknown/release/dicom_gen_uid_website.wasm
