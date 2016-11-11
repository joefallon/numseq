class Numseq {
    private static _seq = 0;

    public static next():number {
        Numseq._seq++;

        return Numseq._seq;
    }

    public static reset() {
        Numseq._seq = 0;
    }
}

export = Numseq;