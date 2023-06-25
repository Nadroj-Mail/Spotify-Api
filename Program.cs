string accessToken = "ACCESS-TOKEN";
string artistID = "THE-ARTIST-ID";
string endPoint = $"https://api.spotify.com/v1/artists/{artistID}";

using (HttpClient client = new HttpClient())
{
    client.DefaultRequestHeaders.Add("Authorization", $"Bearer {accessToken}");
    HttpResponseMessage response = await client.GetAsync(endPoint);
    
    if (response.IsSuccessStatusCode)
    {
        string responseContent = await response.Content.ReadAsStringAsync(); 
        Console.WriteLine(responseContent);
    }
    else
    {
        Console.WriteLine($"Error: {response.StatusCode}");
    }
}