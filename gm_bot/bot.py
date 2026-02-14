
import os
import requests
import schedule
import time
from datetime import datetime
import pytz

# Configuration - Get from ENV or default for testing
BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')

def send_telegram_message(message):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        'chat_id': CHAT_ID,
        'text': message,
        'parse_mode': 'Markdown'
    }
    try:
        response = requests.post(url, json=payload, timeout=10)
        if response.status_code == 200:
            print(f"✅ Message sent at {datetime.now()}")
        else:
            print(f"❌ Failed to send: {response.text}")
    except Exception as e:
        print(f"⚠️ Error: {e}")

def job():
    print(f"⏰ Running scheduled job at {datetime.now()}")
    send_telegram_message("🌞 *Good Morning!* Have a fantastic day ahead! 🚀")

if __name__ == "__main__":
    if not BOT_TOKEN or not CHAT_ID:
        print("❌ Error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set.")
        exit(1)
        
    print(f"🤖 Bot started! Monitoring for 9:00 AM IST (03:30 UTC)...")
    
    # Send a startup message
    send_telegram_message("🤖 *Bot Online!* I will message you every day at 9:00 AM IST.")
    
    # Schedule: 9:00 AM IST is 03:30 UTC. 
    # Most cloud servers run on UTC, so we schedule for 03:30 UTC.
    schedule.every().day.at("03:30").do(job)
    
    while True:
        schedule.run_pending()
        time.sleep(60)
