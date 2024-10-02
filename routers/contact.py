from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud, database

router = APIRouter()

@router.post("/contact")
def submit_contact(name: str, message: str, db: Session = Depends(database.get_db)):
    crud.submit_contact_form(db, name=name, message=message)
    return {"message": f"Thank you, {name}. Your message has been received!"}
