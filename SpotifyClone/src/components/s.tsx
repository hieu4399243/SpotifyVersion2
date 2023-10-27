curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=8fc2bdd6616d497fa8e980542f953b0d&client_secret=dc39e620b4924c7eb7022d98a00c1ca2"

     ccess_token":"BQBeCse5rx7O6xLYEhC037wmh4YykFeWOY7g_OkjbgMGdSDEHiWMQKbZexsuFfkc5gOrtH1IfIs7z_faH1hY9fkkCsGOAjKqvQOt0x5IL5lyJOaeLEY

     curl "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb" \
     -H "Authorization: Bearer BQBeCse5rx7O6xLYEhC037wmh4YykFeWOY7g_OkjbgMGdSDEHiWMQKbZexsuFfkc5gOrtH1IfIs7z_faH1hY9fkkCsGOAjKqvQOt0x5IL5lyJOaeLEY"


     stepzen import \
        curl "https://api.spotify.com/v1/recommendations?seed_genres=pop" \
        --header "Authorization: Bearer BQBeCse5rx7O6xLYEhC037wmh4YykFeWOY7g_OkjbgMGdSDEHiWMQKbZexsuFfkc5gOrtH1IfIs7z_faH1hY9fkkCsGOAjKqvQOt0x5IL5lyJOaeLEY" \
        --query-name "recommendations" \
        --query-type "Recommendation" \
        --name "recommendations" \
        --prefix "Recommend"


        stepzen import \
        curl -X POST "https://accounts.spotify.com/api/token" \
        --header "Content-Type: application/x-www-form-urlencoded" \
        --data "grant_type=client_credentials&client_id=8fc2bdd6616d497fa8e980542f953b0d&client_secret=dc39e620b4924c7eb7022d98a00c1ca2" \
        --query-name "getToken" \
        --query-type "TokenResponse" \
        --name "auth"