import{d as l,j as s}from"./index-5gu9C6zf.js";const d={title:"Getting Started",description:"undefined"};function i(n){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"getting-started",children:["Getting Started",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h2,{id:"overview",children:["Overview",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Cell Script is a new designed statically-typed programming language for smart contracts running on UTXO-based chain CKB."}),`
`,s.jsx(e.p,{children:"By using Cell Script, any developer can start the jounery of CKB smart contracts in minutes."}),`
`,s.jsxs(e.p,{children:["The Cell Script spec can be found ",s.jsx(e.a,{href:"https://github.com/cell-labs/cell-script/blob/main/SPEC.md",children:"here"})]}),`
`,s.jsxs(e.p,{children:["More details about CKB, can be find ",s.jsx(e.a,{href:"https://www.nervos.org/ckbpage",children:"here"})]}),`
`,s.jsxs(e.h2,{id:"example",children:["Example",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'import "debug"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'import "tx"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'import "cell"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"func main() {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    if tx.isOwnerMode() {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"        return 0"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    in_sum, out_sum := 0, 0"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    ins := tx.inputs()"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    if len(ins) == int32(0) {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"        return 1"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    for input := range tx.inputs() {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"        in_sum += input"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    for output := range tx.outputs() {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"        out_sum += output"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    if in_sum < out_sum {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'        debug.Printf("Invalid Amount")'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"        return 1"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"  "})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"    return 0"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"}"})})]})}),`
`,s.jsxs(e.h2,{id:"quick-start",children:["Quick Start",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"You can build the Cell Script Compiler from source code right now!"}),`
`,s.jsxs(e.h3,{id:"how-to-build-macos",children:["How to build (MacOS)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-build-macos",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew install go@1.22"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew install antlr@4"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew install openjdk@21"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew install llvm@16"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew tap riscv-software-src/riscv"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew install riscv-tools"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'export PATH="/opt/homebrew/bin:$PATH"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'export PATH="/opt/homebrew/opt/llvm@16/bin:$PATH"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"brew install --cask spike"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"make build"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"source install.sh"})})]})}),`
`,s.jsxs(e.h3,{id:"how-to-build-ubuntu",children:["How to build (Ubuntu)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-build-ubuntu",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.div,{"data-vocs-steps":"true",children:[s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"install-golang-122",children:["Install ",s.jsx(e.code,{children:"golang 1.22"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-golang-122",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo add-apt-repository ppa:longsleep/golang-backports"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt update"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install golang-go"})})]})})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"install-antlr4-openjdk-21-clang",children:["Install ",s.jsx(e.code,{children:"antlr4"}),", ",s.jsx(e.code,{children:"openjdk-21"}),", ",s.jsx(e.code,{children:"clang"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-antlr4-openjdk-21-clang",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install antlr4"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install openjdk-21-jdk"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install clang"})})]})})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"install-llvm",children:["Install ",s.jsx(e.code,{children:"llvm"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-llvm",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'sudo bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"'})})})}),s.jsx(e.p,{children:"or"}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install llvm"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install lld"})})]})})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"install-riscv-tools",children:["Install ",s.jsx(e.code,{children:"riscv-tools"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-riscv-tools",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt update"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt upgrade"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install autoconf automake autotools-dev curl python3 python3-pip libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build git cmake libglib2.0-dev libslirp-dev"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"mkdir risc-v"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cd risc-v"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"git clone https://github.com/riscv-collab/riscv-gnu-toolchain.git"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cd riscv-gnu-toolchain"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo mkdir /opt/riscv"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"./configure --prefix=/opt/riscv"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo make linux"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:`echo 'export PATH="$PATH:/opt/riscv/bin"' >> ~/.bashrc`})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"source ~/.bashrc"})})]})}),s.jsx(e.p,{children:"or"}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install gcc-riscv64-unknown-elf"})})})})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"install-spike-️this-is-optional",children:["Install ",s.jsx(e.code,{children:"spike"}),". ⚠️This is optional",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install-spike-️this-is-optional",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"sudo apt install device-tree-compiler libboost-all-dev"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cd ~/risc-v"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"git clone https://github.com/riscv-software-src/riscv-isa-sim.git"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cd riscv-isa-sim"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"mkdir build"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cd build"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"../configure --prefix=/opt/riscv"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"make"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"make install"})})]})})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"build--install-compiler-in-the-root-folder",children:["Build & Install compiler in the root folder",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build--install-compiler-in-the-root-folder",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"make build"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"source install.sh"})})]})})]})]}),`
`,s.jsxs(e.h2,{id:"how-to-compile-cellscript-program",children:["How to compile cellscript program",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-compile-cellscript-program",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["You can write your program in file with ",s.jsx(e.code,{children:".cell"}),". Here for example, we say ",s.jsx(e.code,{children:"hello.cell"})]}),`
`,s.jsxs(e.div,{"data-vocs-steps":"true",children:[s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"compile-cell-file",children:["Compile ",s.jsx(e.code,{children:".cell"})," file",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compile-cell-file",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cell hello.cell"})})})}),s.jsxs(e.p,{children:["You will get the output file also known as elf file named ",s.jsx(e.code,{children:"hello"})," in the root folder. Just run it ",s.jsx(e.code,{children:"./hello"}),"!"]})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"compile-elf-target",children:["Compile elf target",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compile-elf-target",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsxs(e.p,{children:["To compile ",s.jsx(e.code,{children:"elf"})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cell -t riscv hello.cell"})})})}),s.jsxs(e.p,{children:["You will get the elf executable named ",s.jsx(e.code,{children:"hello"})," in the root folder."]})]}),s.jsxs(e.div,{"data-depth":"4",children:[s.jsxs(e.h4,{id:"to-run-elf-file",children:["To run ",s.jsx(e.code,{children:"elf"})," file",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#to-run-elf-file",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsxs(e.p,{children:["To run the elf file, we need ",s.jsx(e.code,{children:"ckb-debugger"})," the default debugger for ckb programs."]}),s.jsxs(e.p,{children:["Run the following command to install ",s.jsx(e.code,{children:"ckb-debugger"}),", suppose you already know what is cargo."]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"cargo install --git https://github.com/nervosnetwork/ckb-standalone-debugger ckb-debugger"})})})}),s.jsxs(e.p,{children:["Run below command to debug & run the ",s.jsx(e.code,{children:"hello"})," program."]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"ckb-debugger --bin hello"})})})})]})]}),`
`,s.jsxs(e.h2,{id:"usage-of-cell-script-compiler",children:["Usage of Cell Script Compiler",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage-of-cell-script-compiler",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Use ",s.jsx(e.code,{children:"cell --help"})," to view the usage instructions."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"Usage: cell [options] <filename>"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"  -d, --debug           Emit debug information during compile time"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"  -h, --help            Show help message"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"  -O, --optimize        Enable clang optimization"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"  -o, --output string   Output binary filename"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:'  -t, --target string   Compile to this target (default "native")'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"  -v, --verbose         Emit verbose command during compiling"})})]})})]})}function r(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{r as default,d as frontmatter};
