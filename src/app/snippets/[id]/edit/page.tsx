import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/db/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

async function SnippetEditPage(props: SnippetEditPageProps) {

  // Getting the data from the db
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }
  return (
      <SnippetEditForm snippet={ snippet} />
  );
}

export default SnippetEditPage;
