import{d as i,j as n}from"./index-BM2eiypE.js";const c={layout:"minimal",showOutline:!0,showSidebar:!0,title:"A Tour of CellScript",description:"undefined"};function a(e){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.header,{children:n.jsxs(s.h1,{id:"a-tour-of-cellscript",children:["A Tour of CellScript",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-tour-of-cellscript",children:n.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(s.h2,{id:"installations",children:["Installations",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installations",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.p,{children:n.jsx(s.a,{href:"/docs/install",children:"installation"})}),`
`,n.jsxs(s.h2,{id:"cellscript-by-example",children:["CellScript by example",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cellscript-by-example",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(s.h3,{id:"hello-world",children:["Hello World",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hello-world",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'import "debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"function main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Println("hello world")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ cell -r riscv hello-world.cell"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ls"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"hello-world.cell hello-world"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ckb-debugger --bin hello-world"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"hello world"})})]})}),`
`,n.jsxs(s.h3,{id:"value",children:["Value",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#value",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'import "debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"function main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("cellscript")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("1+1 = %d", 1+1)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("true = %d", true)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	return 0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ cell -r riscv value.cell"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ckb-debugger --bin value"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"cellscript"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"1+1 = 2"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"true = 1"})})]})}),`
`,n.jsxs(s.h3,{id:"variables",children:["Variables",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#variables",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'import "debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"function main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    var a = "initial"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%s", a)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    var b, c int64 = 1, 2"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%d %d", b, c)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    var d = true"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%d", d)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    var e int32"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%d", e)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    f := "short"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%s", f)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	return 0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ cell -r riscv value.cell"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ckb-debugger --bin value"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"initial"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"1 2"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"1"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"short"})})]})}),`
`,n.jsxs(s.h3,{id:"constants",children:["Constants",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#constants",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"import ("})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    "debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:")"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"const ("})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	s string = "constant"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	s2 = "string: s2"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:")"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"function main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%s", s)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%s", s2)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    const n = 500000000"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    debug.Printf("%d", n)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	return 0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ cell -r riscv const.cell"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ckb-debugger --bin const"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"constant"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"another constant"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"500000000"})})]})}),`
`,n.jsxs(s.h3,{id:"for-loop",children:["For Loop",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-loop",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'import "debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"function main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    for j := 7; j <= 9; j++ {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("%d", j)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    for n := 0; n <= 5; n++ {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"        if (n&1) == 0 {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"            continue"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"        }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("%d", n)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    return 0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ cell -r riscv for.cell"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ckb-debugger --bin for"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"7"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"8"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"9"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"1"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"3"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"5"})})]})}),`
`,n.jsxs(s.h3,{id:"ifelse-branch",children:["If/Else Branch",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ifelse-branch",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'import "debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"function main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    if (7&1) == 0 {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("7 is even")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    } else {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("7 is odd")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    num := 9"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    if num < 0 {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("9 is negative")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    } else if num < 10 {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("9 has 1 digit")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    } else {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'        debug.Printf("9 has multiple digits")'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    return 0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ cell -r riscv for.cell"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"$ ckb-debugger --bin for"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"7 is odd"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"9 has 1 digit"})})]})}),`
`,n.jsxs(s.h3,{id:"array",children:["Array",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#array",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"package main"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'import "fmt"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"func main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    var a [5]int"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    fmt.Println("emp:", a)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    a[4] = 100"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    fmt.Println("set:", a)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    fmt.Println("get:", a[4])'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    fmt.Println("len:", len(a))'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    b := [5]int{1, 2, 3, 4, 5}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    fmt.Println("dcl:", b)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    var twoD [2][3]int"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    for i := 0; i < 2; i++ {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"        for j := 0; j < 3; j++ {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"            twoD[i][j] = i + j"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"        }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"    }"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'    fmt.Println("2d: ", twoD)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})})]})}),`
`,n.jsxs(s.h3,{id:"interface",children:["Interface",n.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interface",children:n.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(s.code,{children:[n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"import ("})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	"errors"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	"debug"'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:")"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"type Demo table {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	start uint32"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	end   uint32"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"func (b *Demo) st() (n uint32, err error) {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	return b.start, errors.None()"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"func (b *Demo) ed() uint32 {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	return b.end"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"func (b *Demo) reset() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	b.start = uint32(0)"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	b.end = uint32(0)"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"type Range interface {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	st() (uint32, error)"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	ed() uint32"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	reset()"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"func foo(b Range) {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	n, err := b.st()"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	debug.Printf("%s", err.Error())'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	end := b.ed()"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	debug.Printf("%d", end)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	b.reset()"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"func main() {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	b := Demo {"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"		start: uint32(1),"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"		end: uint32(3),"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	foo(b)"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:'	debug.Printf("reset%d%d", b.start, b.end)'})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"	return 0"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{children:"}"})}),`
`,n.jsx(s.span,{className:"line",children:n.jsx(s.span,{})})]})})]})}function r(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(a,{...e})}):a(e)}export{r as default,c as frontmatter};
