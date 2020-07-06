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
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount:business.review_count 
                    };
                });
            }
        });
    }
}

export default Yelp;