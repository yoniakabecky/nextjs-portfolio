import Head from "next/head";

// Ref: https://csswizardry.com/2020/05/the-fastest-google-fonts/

export default function GoogleFontsMeta() {
  return (
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&family=Ravi+Prakash&display=swap"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&family=Ravi+Prakash&display=swap"
        media="print"
        // @ts-ignore
        onLoad="this.media='all'"
      />

      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&family=Ravi+Prakash&display=swap"
        />
      </noscript>
    </Head>
  );
}
