const MayBe = (value)=>({
            value,
            isNull()
            {
                return value=== undefined ||value===null;
            },
            map(fn)
            {
                return this.isNull()? MayBe.of(null): MayBe.of(fn(value));
            },
            valueOf()
            {
                return value;
            }
        });
        MayBe.of = MayBe;