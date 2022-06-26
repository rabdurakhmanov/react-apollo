import { gql, useQuery } from "@apollo/client";
import map from "lodash/map";

const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

export function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error :(</p>;
    }

    return (
        <>
            {map(data.rates, ({ currency, rate }) => (
                <div key={currency}>
                    <p>
                        {currency}: {rate}
                    </p>
                </div>
            ))}
        </>
    );
}
