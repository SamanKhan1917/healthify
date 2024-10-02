from fastapi import FastAPI
from database import engine
from models import Base
from routers import user, menu, contact

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user.router, prefix="/users", tags=["users"])
app.include_router(menu.router, prefix="/menu", tags=["menu"])
app.include_router(contact.router, prefix="/contact", tags=["contact"])
