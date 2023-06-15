import jsonwebtoken from "jsonwebtoken";

export function generateBearerToken(req, res) {
    const user = req.user;
    const secret = "my-super-secret-value";
    const expiresIn = "1h";

    const token = jsonwebtoken.sign(
        {
            sub: user.id,
            name: user.name,
        },
        secret,
        { expiresIn },
    );
    res.json({
        access_token: token,
        token_type: "Bearer",
        expires_in: expiresIn,
    });
}
