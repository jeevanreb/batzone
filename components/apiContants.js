const baseUrl = process.env.NEXT_PUBLIC_URL;
const s3Url = process.env.NEXT_PUBLIC_S3_URL;
export const getDocUrl = url => `${s3Url}${url}`

export const Apis = {
    signupApi: `${baseUrl}/signup.php`,
    contactApi: `${baseUrl}/contact.php`,
    subscribeApi: `${baseUrl}/subscribe.php`,
}