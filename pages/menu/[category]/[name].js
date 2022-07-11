import { useRouter } from 'next/router'
import path from 'path';


export default function Post({ postData }) {
    const router = useRouter()
    const {category, name} = router.query
    //const postsDirectory = path.join(process.cwd(), category, name);

    return <p>Post: {category}, {name} </p>
}