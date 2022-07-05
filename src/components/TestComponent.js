export default function TestComponent() {
    const text = "<code>Risposta:</code> {0} Corretta {1}";
    const tokens = text.split(/\{\d\}/).filter(Boolean);

    console.log();
    return (
        <p>
            {tokens.map((t, i) => {
                return (
                    <span key={i}>
                        <span key={`s${i}`} dangerouslySetInnerHTML={{ __html: t }} />
                        <input type="text" />
                    </span>
                );
            })}
        </p>

    );
}