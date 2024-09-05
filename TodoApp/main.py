
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
import models
from database import engine
from routers import auth, todos, admin, users
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



models.Base.metadata.create_all(bind=engine)




app.include_router(auth.router)
app.include_router(todos.router)
app.include_router(admin.router)
app.include_router(users.router)