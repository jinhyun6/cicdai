from database import Base, engine
from models import Submission
import sys

def create_tables():
    try:
        Base.metadata.create_all(bind=engine)
        print("✅ Tables created successfully!")
        print("Tables created:")
        print("- submissions")
    except Exception as e:
        print(f"❌ Error creating tables: {e}")
        sys.exit(1)

if __name__ == "__main__":
    create_tables()