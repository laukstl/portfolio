import Image from "next/image";

function LogoPub () {
    return (
        <div className="fixed bottom-0 left-0 flex h-10 w-full items-end justify-center
        bg-gradient-to-t from-white via-white dark:from-black dark:via-black
        sm:h-28 md:h-48
        lg:size-auto lg:bg-none lg:static lg:flex lg:justify-end lg:pr-[150px]
    ">
        <a
            className="flex place-items-center gap-2 p-0 sm:p-8 lg:pointer-events-auto lg:p-0 font-mono text-sm"
            href="https://www.kstl.fr"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{" "}
            <Image
                src="/kstl_logo.webp"
                alt="Kstl Logo"
                className="dark:invert w-1/3"
                width={75}
                height={45}
                priority
            />
        </a>
    </div>
    )
}

export default LogoPub;
