import{d as i,j as s}from"./index-5gu9C6zf.js";const c={layout:"minimal",showOutline:!0,showSidebar:!0,title:"Course",description:"undefined"};function a(e){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",pre:"pre",span:"span",...i(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"course",children:["Course",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#course",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.div,{}),`
`,s.jsx(n.header,{children:s.jsxs(n.h1,{id:"cellscript-by-example",children:["CellScript by example",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cellscript-by-example",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(n.h2,{id:"hello-world",children:["Hello World",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hello-world",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'import "debug"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"function main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Println("hello world")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ cell -r riscv hello-world.cell"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ls"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"hello-world.cell hello-world"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ckb-debugger --bin hello-world"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"hello world"})})]})}),`
`,s.jsxs(n.h2,{id:"值",children:["值",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#值",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'import "debug"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"function main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("cellscript")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("1+1 = %d", 1+1)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("true = %d", true)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"	return 0"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ cell -r riscv value.cell"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ckb-debugger --bin value"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"cellscript"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"1+1 = 2"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"true = 1"})})]})}),`
`,s.jsxs(n.h2,{id:"变量",children:["变量",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#变量",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'import "debug"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"function main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    var a = "initial"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%s", a)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    var b, c int64 = 1, 2"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%d %d", b, c)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    var d = true"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%d", d)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    var e int32"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%d", e)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    f := "short"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%s", f)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"	return 0"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ cell -r riscv value.cell"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ckb-debugger --bin value"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"initial"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"1 2"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"1"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"0"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"short"})})]})}),`
`,s.jsxs(n.h2,{id:"常量",children:["常量",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#常量",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"import ("})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    "debug"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:")"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"const ("})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'	s string = "constant"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'	s2 = "string: s2"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:")"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"function main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%s", s)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%s", s2)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    const n = 500000000"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    debug.Printf("%d", n)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"	return 0"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ cell -r riscv const.cell"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ckb-debugger --bin const"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"constant"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"another constant"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"500000000"})})]})}),`
`,s.jsxs(n.h2,{id:"for-循环",children:["For 循环",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-循环",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'import "debug"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"function main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    for j := 7; j <= 9; j++ {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("%d", j)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    for n := 0; n <= 5; n++ {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"        if (n&1) == 0 {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"            continue"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"        }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("%d", n)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    return 0"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ cell -r riscv for.cell"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ckb-debugger --bin for"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"7"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"8"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"9"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"1"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"3"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"5"})})]})}),`
`,s.jsxs(n.h2,{id:"ifelse-分支",children:["If/Else 分支",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ifelse-分支",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'import "debug"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"function main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    if (7&1) == 0 {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("7 is even")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    } else {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("7 is odd")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    num := 9"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    if num < 0 {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("9 is negative")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    } else if num < 10 {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("9 has 1 digit")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    } else {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'        debug.Printf("9 has multiple digits")'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    return 0"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ cell -r riscv for.cell"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"$ ckb-debugger --bin for"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"7 is odd"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"9 has 1 digit"})})]})}),`
`,s.jsxs(n.h2,{id:"array",children:["Array",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#array",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"package main"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'import "fmt"'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"func main() {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    var a [5]int"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    fmt.Println("emp:", a)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    a[4] = 100"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    fmt.Println("set:", a)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    fmt.Println("get:", a[4])'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    fmt.Println("len:", len(a))'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    b := [5]int{1, 2, 3, 4, 5}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    fmt.Println("dcl:", b)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    var twoD [2][3]int"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    for i := 0; i < 2; i++ {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"        for j := 0; j < 3; j++ {"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"            twoD[i][j] = i + j"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"        }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"    }"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'    fmt.Println("2d: ", twoD)'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"}"})})]})})]})}function r(e={}){const{wrapper:n}={...i(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(a,{...e})}):a(e)}export{r as default,c as frontmatter};
