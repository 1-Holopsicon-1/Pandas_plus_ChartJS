import numpy as np
import pandas as pd


def main():

    df = pd.read_csv("ВВП стран мира.csv", skiprows=3)
    df["2019"] = df["2019"].apply(lambda x: x.replace(",", "."))
    df["2020"] = df["2020"].apply(lambda x: x.replace(",", "."))
    
    #Я без малейшего понятия почему без такой записи он отказывается перезаписывать
    #Спасибо за подсказку другому человеку
    if "-" in df["2019"]:
        df["2019"] = df["2019"].replace("-", np.NaN)
    else:
        df["2019"] = df["2019"].replace("-", np.NaN)
    
    if "-" in df["2020"]:
        df["2020"] = df["2020"].replace("-", np.NaN)
    else:
        df["2020"] = df["2020"].replace("-", np.NaN)

    df.dropna(inplace=True)

    df["2019"] = df["2019"].astype("float64")
    df["2020"] = df["2020"].astype("float64")

    date = ["2019", "2020"]
    d1 = list(df[date[0]])
    d2 = list(df[date[1]])
    names_raw = list(df["Страна"])

    label = f"let date = {date};"
    names = f"let names = {names_raw};"
    data = f"let data = [{d1}, {d2}];"

    with open("vars.js", "w", encoding="utf-8") as f_out:
        f_out.write(f"{label}\n{names}\n{data}")


if __name__ == "__main__":
    main()
