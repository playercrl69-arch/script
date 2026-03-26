<!DOCTYPE html>
<html>
<head>
    <title>Redirecting...</title>
</head>
<body>
    <script>
        // 1. List your domains here
        const domains = [
            "first-domain.com",
            "second-domain.com",
            "third-example.net"
        ];

        // 2. Get the current path (e.g., /234)
        const currentPath = window.location.pathname;

        // 3. Pick a random domain from the list
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];

        // 4. Construct the new URL
        // This takes the random domain and adds the path (/234) to the end
        const finalUrl = "https://" + randomDomain + currentPath;

        // 5. Redirect the user
        window.location.replace(finalUrl);
    </script>
</body>
</html>



