
from fastapi import FastAPI, Response
from fastapi.responses import JSONResponse
from static import data
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(openapi_url=f"/openapi.json",)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/table")
async def get_table_data():
    return JSONResponse(status_code=200, content=data)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=9090)
