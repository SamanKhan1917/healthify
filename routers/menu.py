from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models import MenuItem
from schemas import MenuItemCreate
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/menu/")
def create_menu_item(item: MenuItemCreate, db: Session = Depends(get_db)):
    new_item = MenuItem(name=item.name, price=item.price, image_url=item.image_url)
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

@router.get("/menu/")
def get_menu_items(db: Session = Depends(get_db)):
    items = db.query(MenuItem).all()
    return items
