import { useRouter, useSearchParams } from "next/navigation";

export const GET = async (request, { params }) => {
  try {
    //DB
    // const prompts = await Prompt.find({ creator: params.id }).populate(
    //   "creator"
    // );

    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    useEffect(() => {
      const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();

        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      };

      if (promptId) getPromptDetails();
    }, [promptId]);

    function handleProductSelection(productId) {
      switch (productId) {
        case "123401":
          // Code to handle product 1
          return { name: "Product 1", price: 10.99 };

        case "123402":
          // Code to handle product 2
          return { name: "Product 1", price: 10.99 };
        case "123403":
          // Code to handle product 3
          return { name: "Product 1", price: 10.99 };

        default:
          return { name: "Product 1", price: 10.99 };
      }
    }

    const selectedProductId = "product2";
    const productData = getProductData(selectedProductId);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
