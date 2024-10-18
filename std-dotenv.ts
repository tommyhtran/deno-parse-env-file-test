import "jsr:@std/dotenv@0.225.2/load";

console.log(Deno.version);

console.log(Deno.env.get("HELLOWORLD"));
