<template>
    <div>
        <div class="dialog">
            <div class="content">
                <slot name="header"></slot>
                <div class="dialog-content">
                    <slot>
                        <span>666</span>
                    </slot>
                </div>
                <slot name="footer" :show="show">
                    <div class="dialog-footer">
                        <span>取消</span>
                        <span>确定</span>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            show:false
        };
    },
    computed: {},
    methods: {
       
    },
    created() {
        console.log(this);
    },
    mounted() {}
};
</script>
<style scoped>
.dialog {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
}
.content {
    height: 200px;
    width: 80%;
    margin-left: 10%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
}
.dialog-header {
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    align-items: center;
}
.dialog-content {
    flex: 1;
}
.dialog-footer {
    height: 50px;
    width: 100%;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.dialog-footer span {
    height: 40px;
    width: 100px;
    border: 1px solid red;
    line-height: 40px;
    text-align: center;
}
</style>