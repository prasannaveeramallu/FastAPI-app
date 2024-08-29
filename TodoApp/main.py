
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
import models
from database import engine
from routers import auth, todos, admin, users
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app = FastAPI()


models.Base.metadata.create_all(bind=engine)




app.include_router(auth.router)
app.include_router(todos.router)
app.include_router(admin.router)
app.include_router(users.router)