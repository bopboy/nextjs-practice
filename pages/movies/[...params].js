import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
    const router = useRouter()
    const [title, id] = router.query.params || []
    return (
        <div>
            <Seo title={title}></Seo>
            <h4>{title || "Loading..."}</h4>
        </div>
    )
}
export function getServerSideProps({ params: { params } }) {
    return {
        props: {
            params,
        },
    };
}