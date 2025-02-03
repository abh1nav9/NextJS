export default async function ProductDetails({ params }: {
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId;
    return (
        <>
            <h1>
                This is Product {productId}
            </h1>
        </>
    );
};