const fetchSearch =  async({queryKey}) => {
    const {location, animal, breed} = queryKey[1];

    const resApi = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    if(!resApi.ok) {
        throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
    }

    return resApi.json();
}
export default fetchSearch;