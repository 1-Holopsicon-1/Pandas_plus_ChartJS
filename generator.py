import pandas as pd


def main():
    df = pd.read_csv('Доля геополитических блоков.csv', skiprows=2)

    countries = list(df.columns[1:])
    print(countries)
    d1 = list(df[countries[0]])
    print(d1)
    d2 = list(df[countries[1]])
    print(d2)

    country = f"let countries = {countries};"
    data = f"let data = [[{d1[0]}, {d2[0]}], [{d1[1]}, {d2[1]}], " \
           f"[{d1[2]}, {d2[2]}], [{d1[3]}, {d2[3]}]];"

    with open('vars.js', 'w', encoding='utf-8') as out:
        out.write(f"{country}\n{data}")


if __name__ == "__main__":
    main()
