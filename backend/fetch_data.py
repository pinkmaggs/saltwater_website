import yfinance as yf
import pandas as pd
from bs4 import BeautifulSoup  # Correct import
import requests

# Fetch Tesla stock data
def get_tesla_data():
    tesla = yf.Ticker("TSLA")
    tsla_history = tesla.history(period="max")
    tsla_history.reset_index(inplace=True)
    return tsla_history

# Fetch Tesla revenue data from the web
def get_tesla_revenue():
    url = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0220EN-SkillsNetwork/labs/project/revenue.htm"
    html_data = requests.get(url)
    soup = BeautifulSoup(html_data.content, "html.parser")

    quarterly_table = soup.find_all("tbody")[1]
    tesla_revenue = pd.DataFrame(columns=["Date", "Revenue"])

    for row in quarterly_table.find_all("tr"):
        cell = row.find_all("td") 
        date_txt = cell[0].text.strip()
        revenue = cell[1].text.strip().replace("$", "").replace(",", "")
        
        if revenue:  # Avoid adding empty revenue values
            tesla_revenue = pd.concat([tesla_revenue, pd.DataFrame({"Date": [date_txt], "Revenue": [revenue]})], ignore_index=True)

    return tesla_revenue

# Fetch GameStop stock data
def get_gme_stock_data():
    gme = yf.Ticker("GME")
    gme_data = gme.history(period="max")
    gme_data.reset_index(inplace=True)
    return gme_data

# Fetch GameStop revenue data from the web
def get_gme_revenue():
    url = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0220EN-SkillsNetwork/labs/project/stock.html"
    html_data = requests.get(url).content
    soup = BeautifulSoup(html_data, "html.parser")  

    quarterly_table = soup.find_all("tbody")[1]
    gme_revenue = pd.DataFrame(columns=["Date", "Revenue"])

    for row in quarterly_table.find_all("tr"):
        cell = row.find_all("td") 
        date_txt = cell[0].text.strip()
        revenue = cell[1].text.strip().replace("$", "").replace(",", "")

        if revenue:  # Avoid adding empty revenue values
            gme_revenue = pd.concat([gme_revenue, pd.DataFrame({"Date": [date_txt], "Revenue": [revenue]})], ignore_index=True)

    return gme_revenue

# Main execution function
def main():
    print("Fetching Tesla stock data...")
    tesla_df = get_tesla_data()
    tesla_df.to_csv("tesla_stock_data.csv", index=False)
    print("Tesla stock data saved.")

    print("Fetching Tesla revenue data...")
    tesla_revenue = get_tesla_revenue()
    tesla_revenue.to_csv("tesla_revenue_data.csv", index=False)
    print("Tesla revenue data saved.")

    print("Fetching GameStop stock data...")
    gme_df = get_gme_stock_data()
    gme_df.to_csv("gme_stock_data.csv", index=False)
    print("GameStop stock data saved.")

    print("Fetching GameStop revenue data...")
    gme_revenue = get_gme_revenue()
    gme_revenue.to_csv("gme_revenue_data.csv", index=False)
    print("GameStop revenue data saved.")

if __name__ == "__main__":
    main()
