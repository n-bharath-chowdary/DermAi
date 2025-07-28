from flask import Flask, request, Response, make_response
import requests

app = Flask(__name__)

@app.route("/ipcam-proxy")
def ipcam_proxy():
    target_url = request.args.get("url")
    if not target_url:
        return "Missing URL", 400

    try:
        r = requests.get(target_url, stream=True)
        resp = Response(
            r.iter_content(chunk_size=1024),
            content_type=r.headers.get("Content-Type", "multipart/x-mixed-replace")
        )
        resp.headers["Access-Control-Allow-Origin"] = "*"  # 🧠 Allow frontend access
        resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
        return resp

    except Exception as e:
        return f"Failed to proxy: {e}", 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
