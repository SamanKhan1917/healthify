from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models import ContactMessage
from schemas import ContactMessageCreate
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/contact/")
def create_contact_message(message: ContactMessageCreate, db: Session = Depends(get_db)):
    new_message = ContactMessage(name=message.name, message=message.message)
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return new_message
