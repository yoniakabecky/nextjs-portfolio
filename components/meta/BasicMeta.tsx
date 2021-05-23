import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
}

export default function BasicMeta({ title, description }: Props) {
  return (
    <Head>
      <title>Yoni Aoki - {title ?? "A Front-end Developer"}</title>

      <meta
        name="description"
        content={
          description ??
          "Yoni Aoki is a front-end developer based in Vancouver, Canada."
        }
      />

      <meta name="author" content="Yoni Aoki" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
