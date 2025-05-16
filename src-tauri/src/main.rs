use std::process::{Command, Stdio};
use tauri::Manager;

#[tauri::command]
async fn ask_llm(prompt: String) -> Result<String, String> {
  let output = Command::new("ollama")
    .arg("run")
    .arg("deepseek-r1:7b")
    // .arg("--prompt")
    .arg(prompt)
    .stdout(Stdio::piped())
    .stderr(Stdio::piped())
    .output()
    .map_err(|e| e.to_string())?;

  if output.status.success() {
    Ok(String::from_utf8_lossy(&output.stdout).to_string())
  } else {
    Err(String::from_utf8_lossy(&output.stderr).to_string())
  }
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![ask_llm])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

