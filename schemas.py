from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class MenuItemCreate(BaseModel):
    name: str
    price: float
    image_url: str

class ContactMessageCreate(BaseModel):
    name: str
    message: str
