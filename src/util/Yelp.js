const apiKey = "AX5QfvHbkzE1UWwSw6v5JfpcsZt7iFnH0-y5S9GH1GA0HDi5_NrbtWVz66NahFOp7ud_FgXtJ0tf-pCimSzb3p3C5k1j2TtJ1F9ShtcUxDVM8wGuevrnIC-U0Pz9XnYx";

const Yelp = {
    search(term, location, sortBy)
    {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount:business.reviewCount 
                    };
                });
            }
        });
    }
}

export default Yelp;