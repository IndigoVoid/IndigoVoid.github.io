/* ============================================================
   AI for Theoretical Physics — 数据文件
   ------------------------------------------------------------
   只改这个文件。index.html 是模板，不要动。

   字段说明：
   id      唯一标识，seed- 开头的是模板自带条目
   date    YYYY-MM-DD
   title   成果标题
   event   事件名（可选）：同一天同一机构的多条成果会归为一个事件大框，
           大框标题取这个字段；不填则回退到第一条成果的 title。
           格式：机构 + 中性动作 + 内容（如「Anthropic 发布…」）。
           动作用「发布/公布/提出」等陈述事实的词，不写「完成/解决/证明」
           这类对结果下判断的词——事件是事发即记录，验证结论由徽章承担。
   org     机构 / 团队 / 个人
   field   领域，自由填写；建议 hep-th / math-ph / quantum-info / astro-ph 等
   status  验证状态：单个字符串，或由多个状态组成的数组（表示并存）。
             可用值：
               independent  独立第三方验证
               formal       Lean / Coq 等形式化验证
               human        人类理解：人能读懂并跟进结果
               claimed      仅宣称，无任何外部核验
             例：status: 'independent' 或 status: ['human', 'formal']
   summary      成果具体做出了什么，只写结果、方法、数值，不写评价
   verification 验证来源数组，每项 { url, label, status? }：
                 url   验证方公布的材料的公开链接
                 label 描述文字，说明是谁发布的什么材料
                 status 该材料对应的验证状态（可选；缺省时按条目第一个状态处理）
                 一条验证也用数组；label 写清是独立发布还是附载于成果方页面
   links        相关链接数组，每项 { url, label }：公告、论文、数据页等。
                 label 写清是什么材料、谁发布的，不要只放光秃秃的链接。
                 这里不放 status；状态只由条目 status 和 verification 表达。
                 没有论文就不要放论文链接，也不要拿方法基础的前置论文冒充。
   tags         标签数组

   分级体系（中文标签与配色）定义在 index.html 的 STATUS 字典里。
   ============================================================ */

window.SEED_DATA = [
  {
    id: 'seed-nine-loop',
    date: '2026-09-25', title: '平面 N=4 超杨-米尔斯六粒子散射振幅九圈计算',
    event: 'Anthropic 发布平面 N=4 超杨-米尔斯理论九圈散射振幅计算结果',
    org: 'Anthropic', field: 'hep-th',
    status: 'independent',
    summary: '计算平面 N=4 超杨-米尔斯理论的六粒子散射振幅九圈结果，此前该振幅计算到八圈。采用两条路径：九圈 form factor 结合 antipodal duality，以及六边形函数空间中的直接 bootstrap。两条路径得到的 107,053 个非零系数逐项一致。',
    verification: [
      { url: 'https://doi.org/10.5281/zenodo.22800071', label: '中科院理论物理所何颂团队独立复现数据集（Zenodo，2026-09-17）' },
      { url: 'https://www.anthropic.com/research/yes-claude-can-do-nine-loops', label: 'Lance Dixon 的核验附言（载于 Anthropic 公告，2026-09-25）' }
    ],
    links: [
      { url: 'https://www.anthropic.com/research/yes-claude-can-do-nine-loops', label: '成果公告（Anthropic，2026-09-25）' },
      { url: 'https://smsharma.io/cosmic-nine-loops/', label: '结果数据页：九圈振幅的符号与函数文件（Siddharth Mishra-Sharma，2026-09-16）' }
    ],
    tags: ['amplitudes', 'N=4 SYM', 'bootstrap']
  },
  {
    id: 'openai-mp-260',
    date: '2026-10-06', title: "时空 Penrose 不等式与刚性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "gr-qc",
    status: ['independent', 'formal'],
    summary: "Penrose 不等式给出广义相对论中 ADM 质量与黑洞视界面积之间的关系。 对任意空间维数 n≥3 的光滑单端渐近平坦初值数据，在主能量条件、弱未来俘获、正包围面积及给定衰减假设下，证明以最小包围面积给出的锐利时空 Penrose 不等式，用最小包围面积给出 ADM 质量下界，并在附加视界假设下得到等号刚性。另给出三维 dyonic 数据的带电面积上界，以及高维纯电情形的推广。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/260.md", label: "形式化证明说明与比较器链接（openai/math，家族 260）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-with-charge-and-original-data-rigidity-October-5-2026/paper.pdf", label: "手稿：The spacetime Penrose inequality with charge and original-data rigidity（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-Charged-Reduction-of-the-Spacetime-Penrose-Inequality-in-Spatial-Dimensions-at-Least-Four-October-5-2026/paper.pdf", label: "手稿：A Charged Reduction of the Spacetime Penrose Inequality in Spatial Dimensions at Least Four（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Spacetime-Penrose-inequalities-enclosing-area-charge-and-rigidity-October-5-2026/paper.pdf", label: "手稿：Spacetime Penrose inequalities enclosing area charge and rigidity（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-Kerr-Newman-Penrose-Inequality-for-Axisymmetric-Electrovacuum-Exteriors-October-5-2026/paper.pdf", label: "手稿：The Kerr Newman Penrose Inequality for Axisymmetric Electrovacuum Exteriors（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Electromagnetic-tails-and-the-Kerr-Newman-Penrose-inequality-October-5-2026/paper.pdf", label: "手稿：Electromagnetic tails and the Kerr Newman Penrose inequality（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-nonmaximal-anti-de-Sitter-Penrose-Inequality-and-original-data-rigidity-October-5-2026/paper.pdf", label: "手稿：The nonmaximal anti de Sitter Penrose Inequality and original data rigidity（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-Penrose-inequality-for-maximal-asymptotically-hyperbolic-initial-data-October-5-2026/paper.pdf", label: "手稿：The Penrose inequality for maximal asymptotically hyperbolic initial data（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-local-Penrose-inequality-for-conformal-perturbations-of-Schwarzschild-anti-de-Sitter-data-October-5-2026/paper.pdf", label: "手稿：A local Penrose inequality for conformal perturbations of Schwarzschild anti de Sitter data（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-spacetime-Penrose-inequality-and-enclosing-area-September-27-2026/paper.pdf", label: "手稿：The spacetime Penrose inequality and enclosing area（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Conformal-flow-and-the-Riemannian-Penrose-inequality-with-minimizing-frontiers-September-27-2026/paper.pdf", label: "手稿：Conformal flow and the Riemannian Penrose inequality with minimizing frontiers（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Equality-and-rigidity-in-the-spacetime-Penrose-inequality-September-27-2026/paper.pdf", label: "手稿：Equality and rigidity in the spacetime Penrose inequality（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Boundary-graph-deformations-for-the-spacetime-Penrose-inequality-September-27-2026/paper.pdf", label: "手稿：Boundary graph deformations for the spacetime Penrose inequality（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Area-controlled-end-replacement-and-the-Bondi-Penrose-inequality-in-the-CKS-class-September-27-2026/paper.pdf", label: "手稿：Area controlled end replacement and the Bondi Penrose inequality in the CKS class（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["general-relativity", "penrose-inequality", "rigidity"]
  },
  {
    id: 'openai-mp-261',
    date: '2026-10-06', title: "Anderson 模型中的局域化与扩展态",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['independent', 'formal'],
    summary: "Anderson 模型描述无序势中电子的量子运动，点谱对应电子局域化，绝对连续谱对应扩展态。 对具有独立均匀位点势的格点 Anderson 模型，证明所预言的谱对比：二维中任意正无序强度几乎必然给出纯点谱；任意固定维数 d≥3 中，充分弱的正无序在固定开区间上给出纯绝对连续谱，且该区间具有非零谱权。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/261.md", label: "形式化证明说明与比较器链接（openai/math，家族 261）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026/paper.pdf", label: "手稿：Absolutely Continuous Spectrum for Weak-Disorder Anderson Models in Dimensions at Least Three（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026/paper.pdf", label: "手稿：Pure Point Spectrum for the Two Dimensional Anderson Model at Every Positive Disorder（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["anderson-model", "localization", "spectral-theory"]
  },
  {
    id: 'openai-mp-262',
    date: '2026-10-06', title: "一维矩阵 Lieb–Thirring 不等式的锐利形式",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "math-ph",
    status: ['independent', 'formal'],
    summary: "Lieb–Thirring 不等式给出量子力学中束缚态能量与势函数之间的界，用于分析物质的稳定性。 对 1/2<γ<3/2 及任意满足积分有限条件的非负有限矩阵势 W，证明一维 Lieb–Thirring 不等式的最优常数等于标量单束缚态的值，与矩阵大小无关。全部等号情形为在同一常酉基下标量 sech² 孤子与零通道的直和，各孤子的尺度与中心独立。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/262.md", label: "形式化证明说明与比较器链接（openai/math，家族 262）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Equality-cases-in-the-sharp-one-dimensional-matrix-Lieb-Thirring-inequality-October-5-2026/sharp-one-dimensional-lieb-thirring-inequalities-matrix-potentials.pdf", label: "手稿：Equality cases in the sharp one-dimensional matrix Lieb–Thirring inequality（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Sharp-one-dimensional-Lieb-Thirring-inequalities-for-matrix-potentials-October-5-2026/sharp-matrix-lieb-thirring.pdf", label: "手稿：Sharp one dimensional Lieb Thirring inequalities for matrix potentials（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Sharp-One-Dimensional-Lieb-Thirring-Constants-September-23-2026/paper.pdf", label: "手稿：Sharp One Dimensional Lieb Thirring Constants（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["lieb-thirring", "matrix-potentials", "sharp-constant"]
  },
  {
    id: 'openai-mp-263',
    date: '2026-10-06', title: "电离猜想与广义电离猜想",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "math-ph",
    status: ['independent', 'formal'],
    summary: "电离猜想关于原子与分子在库仑相互作用下能束缚的电子数目上限。 对含两个电子自旋态的完整非相对论 Coulomb 模型，证明带 M 个电荷至少为 1 的固定核、总电荷为 Z 的分子严格束缚的电子数至多为 Z+CM。给出中性原子第一电离能及包含除期望半个电子外全部电子的半径的一致正负界；移除 m 个电子的能量代价在 m→∞、Z/m→∞ 时具有 Thomas–Fermi 渐近，中性原子外半径在先取 Z→∞ 的迭代极限下有相应渐近。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/263.md", label: "形式化证明说明与比较器链接（openai/math，家族 263）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf", label: "手稿：Uniform excess charge for Coulomb molecules and the outer radius of neutral atoms（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Generalized-ionization-energies-for-full-Coulomb-atoms-September-24-2026/paper.pdf", label: "手稿：Generalized ionization energies for full Coulomb atoms（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Generalized-outer-electron-radii-of-neutral-Coulomb-atoms-September-24-2026/paper.pdf", label: "手稿：Generalized outer electron radii of neutral Coulomb atoms（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["coulomb-model", "ionization", "thomas-fermi"]
  },
  {
    id: 'openai-mp-264',
    date: '2026-10-06', title: "双端 Kerr 数据附近的强宇宙审查",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "gr-qc",
    status: ['independent'],
    summary: "强宇宙审查猜想关乎黑洞奇点是否被视界遮蔽、从而不被外部观测者看到。 对每个固定的旋转次极端 Kerr 桥，证明局部强宇宙审查。在光滑完备双端渐近平坦真空数据的一个加权光滑邻域中，一个稠密 Gδ 子集具有完备的最大全局双曲发展，且不存在弱联络局部平方可积的未来连续非退化延拓。不施加对称性，延拓也不要求满足真空方程。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Generic-Future-Inextendibility-with-Square-Integrable-Connection-Near-a-Fixed-Kerr-Spacetime-September-23-2026/paper.pdf", label: "手稿：Generic Future Inextendibility with Square-Integrable Connection Near a Fixed Kerr Spacetime（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Generic-C1-Future-Inextendibility-Near-Rotating-Subextremal-Kerr-Spacetimes-September-23-2026/paper.pdf", label: "手稿：Generic C1 Future Inextendibility Near Rotating Subextremal Kerr Spacetimes（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Quantitative-Near-Kerr-Evolution-and-Generic-C2-Future-Inextendibility-September-23-2026/paper.pdf", label: "手稿：Quantitative Near Kerr Evolution and Generic C2 Future Inextendibility（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["general-relativity", "cosmic-censorship", "kerr"]
  },
  {
    id: 'openai-mp-265',
    date: '2026-10-06', title: "二维有隙体系的面积律",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['independent'],
    summary: "面积律描述量子多体系统基态的纠缠熵随区域边界而非体积增长。 对任意有限诱导方格点区域上有限程哈密顿量的唯一基态，仅用一致的全系统谱隙和局域相互作用上界，证明熵面积律。在开 L×L 方形上，一致有隙的最近邻基态还可用多项式键维的投影纠缠对态逼近，全局向量误差至多 L^(-1)。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf", label: "手稿：A two-dimensional area law from a global spectral gap（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf", label: "手稿：Polynomial PEPS approximation of gapped square grid ground states（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["area-law", "spectral-gap", "tensor-network"]
  },
  {
    id: 'openai-mp-266',
    date: '2026-10-06', title: "六维中恰好三个相互无偏基",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "相互无偏基是量子测量的一种结构，用于量子态层析与量子密钥分发。 证明 N(6)=3：在 C^6 中存在三个相互无偏基，但不存在四个，解决 Zauner 的六维相互无偏基猜想。排除四基的结论是在给定 binary64 算术与编译条件下完成的认证计算。同族的独立伴随工作还证明六阶复 Hadamard 矩阵在 Tao 三次等价类之外满足 Matolcsi–Ruzsa–Weiner 傅里叶消失猜想。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：HadamardCubeFiber 等 1 项通过，MUBSix 未完成（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/266.md", label: "形式化证明说明与比较器链接（openai/math，家族 266）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf", label: "手稿：The maximum number of mutually unbiased bases in dimension six（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026/Exact-Fourier-certificates-for-complex-Hadamard-matrices-of-order-six-September-24-2026.pdf", label: "手稿：Exact Fourier certificates for complex Hadamard matrices of order six（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["mutually-unbiased-bases", "hadamard", "certified-computation"]
  },
  {
    id: 'openai-mp-267',
    date: '2026-10-06', title: "正温度下的玻色–爱因斯坦凝聚与量子耗尽",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['independent', 'formal'],
    summary: "玻色–爱因斯坦凝聚指玻色气体在低温下大量粒子占据同一量子态；量子耗尽给出凝聚体之外的粒子比例。 对三维硬球气体的精确正则 Gibbs 态，证明每个固定排斥距离与充分小的固定密度都存在一个严格正的温度（与体积无关），在热力学极限下有正的凝聚份额。零温度下，对硬球及正散射长度的固定非负有界径向有限程势，在先取热力学极限、后取稀薄极限的次序下，证明 Bogoliubov 领先量子耗尽律。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/267.md", label: "形式化证明说明与比较器链接（openai/math，家族 267）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Bose-Einstein-condensation-at-positive-temperature-in-the-dilute-hard-sphere-gas-October-5-2026/positive-temperature-hard-spheres.pdf", label: "手稿：Bose–Einstein condensation at positive temperature in the dilute hard-sphere gas（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Quantum-Depletion-and-Momentum-Distribution-in-the-Dilute-Hard-Sphere-Bose-Gas-October-5-2026/Quantum-Depletion-in-the-Dilute-Hard-Sphere-Bose-Gas.pdf", label: "手稿：Quantum Depletion and Momentum Distribution in the Dilute Hard Sphere Bose Gas（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Quantum-Depletion-for-Fixed-Bounded-Repulsive-Potentials-October-5-2026/fixed-repulsion-quantum-depletion.pdf", label: "手稿：Quantum Depletion for Fixed Bounded Repulsive Potentials（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf", label: "手稿：A density uniform condensate bound for dilute Bose gases（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf", label: "手稿：Ground state condensation in the dilute hard sphere gas（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["bose-einstein-condensation", "hard-sphere-gas", "bogoliubov"]
  },
  {
    id: 'openai-mp-268',
    date: '2026-10-06', title: "自旋一 Haldane 能隙",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['human', 'formal'],
    summary: "Haldane 能隙是一维整数自旋反铁磁链基态与第一激发态之间的有限能隙。 对偶数周期环上的纯反铁磁 Heisenberg 链，证明自旋一 Haldane 能隙猜想：随链长增长，谱隙保持一致正。伴随工作对带端点场 h=3/5 的奇数开链给出能隙，并给出拓扑指标为 -1 的边界选定无限体积态。",
    verification: [
      { url: "https://github.com/LionSR/CertifiedGaps/blob/main/paper/certified-gap.pdf", label: "人类理解论文：Bridging Gaps with Tensor Networks: From the Haldane Gap and Beyond（Sirui Lu，2026-11-08）——用精确算术验证有限环输入，以张量网络图重写证明并指出反射正性为关键条件；将周期自旋一链的能隙界提高 19 倍至 Δ>0.0729（偶数 L≥36），并推广到另外七条自旋链与梯形链，附 Lean 4 形式化", status: 'human' },
      { url: "https://github.com/LionSR/CertifiedGaps", label: "论文配套仓库：Certified Spectral Gaps of Quantum Spin Chains（含可复现证书、Lean 证明与交互说明）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-periodic-spin-one-Haldane-gap-September-24-2026/paper.pdf", label: "手稿：The periodic spin-one Haldane gap（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-boundary-field-gap-for-the-spin-one-Heisenberg-chain-September-24-2026/paper.pdf", label: "手稿：A boundary-field gap for the spin-one Heisenberg chain（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["haldane-gap", "heisenberg-chain", "topological-order"]
  },
  {
    id: 'openai-mp-269',
    date: '2026-10-06', title: "Laughlin 能隙及其在标量无序下的稳定性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['independent', 'formal'],
    summary: "Laughlin 态是分数量子霍尔效应的基态，谱隙是基态与激发态之间的能量差。 在球面上填充因子 1/3、完整 V1 相互作用下，证明费米子 Laughlin 谱隙猜想。唯一基态在投影到最低 Landau 能级的充分弱有界实标量单体势下保持一致有隙；能隙与无序阈值对所有充分大的粒子数和所有归一化势形都一致。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：4 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/269.md", label: "形式化证明说明与比较器链接（openai/math，家族 269）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf", label: "手稿：Uniform Stability of the Spherical Laughlin Gap（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf", label: "手稿：A Fock space inequality and the Laughlin spectral gap（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["laughlin-state", "fractional-quantum-hall", "spectral-gap"]
  },
  {
    id: 'openai-mp-270',
    date: '2026-10-06', title: "BFSS 模型的阈上束缚态与正能量束缚态",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "hep-th",
    status: ['independent'],
    summary: "BFSS 矩阵模型是 M 理论的非微扰表述，其束缚态对应 D0 膜的量子态。 证明未形变的相对 SU(N) BFSS 模型对每个有限 N≥2 恰有一个可归一化零能态，解决阈值束缚态猜想。对 SU(2)，伴随工作证明存在无穷多个能量无界的可归一化正能量本征态，与原始 BFSS 论文排除 N=2 处额外束缚态的结论相悖。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-unique-threshold-bound-state-of-the-SU-N-BFSS-model-September-24-2026/paper.pdf", label: "手稿：The unique threshold bound state of the SU(N) BFSS model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Positive-eigenvalues-of-the-relative-SU-2-BFSS-Hamiltonian-October-5-2026/positive-eigenvalues-relative-su2-bfss.pdf", label: "手稿：Positive eigenvalues of the relative SU 2 BFSS Hamiltonian（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["bfss-model", "matrix-theory", "bound-states"]
  },
  {
    id: 'openai-mp-271',
    date: '2026-10-06', title: "Bloch 定律与自发铁磁序",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['independent', 'formal'],
    summary: "Bloch T^(3/2) 定律描述铁磁体低温磁化强度随温度的衰减，系数由磁振子激发决定。 对三维量子 Heisenberg 铁磁体在每个正量子自旋下、允许支撑生成 Z^3 的非负对称有限程耦合，证明具有精确系数的 Bloch T^(3/2) 定律；取极限次序为先热力学极限、再零场导数与低温极限。同族还证明任意维数 d≥3 最近邻模型的自发磁化，并确定三维最近邻耦合下 Bloch 定律的首个晶格修正。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://rstudio-pubs-static.s3.amazonaws.com/1466176_bdf8056ff8a841baa317d4ad53d0411b.html", label: "数值检验（家族 215 与 271 共用脚本）：Bloch 系数与晶格修正与手稿公式吻合；O(4) 质量隙在可及关联长度下高出渐近公式 11–15%，无法独立确认前因子。作者明确注明此检验不构成定理证明（John Akwei，2026-10-07）", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/271.md", label: "形式化证明说明与比较器链接（openai/math，家族 271）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026/bloch-law-heisenberg.pdf", label: "手稿：Bloch's Law for Finite-Range Heisenberg Ferromagnets in Three Dimensions（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-first-lattice-correction-to-Blochs-law-October-5-2026/first-lattice-correction-bloch-law.pdf", label: "手稿：The first lattice correction to Blochs law（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-spherical-magnetization-law-for-the-three-dimensional-quantum-Heisenberg-ferromagnet-October-5-2026/spherical-magnetization.pdf", label: "手稿：The spherical magnetization law for the three dimensional quantum Heisenberg ferromagnet（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/paper.pdf", label: "手稿：Spontaneous magnetization in the quantum Heisenberg ferromagnet（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["bloch-law", "heisenberg-ferromagnet", "spontaneous-magnetization"]
  },
  {
    id: 'openai-mp-272',
    date: '2026-10-06', title: "无可用密钥的纠缠与 PPT 平方猜想",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "PPT 是量子态可分离性的必要条件；可提取密钥为零意味着纠缠态无法用于密钥分发。 在 C^10⊗C^10 上构造一个纠缠态，对给定的、几乎必然完成的局域仪器协议，其可提取密钥为零；这些协议允许联合局域处理与经认证的双向公开通信，除输入纯化与公开记录外无其他共享私有资源。另在 M_21(C) 上构造一个保迹 PPT 通道，其平方不是纠缠破坏的，否定 Christandl 的 PPT 平方猜想。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/272.md", label: "形式化证明说明与比较器链接（openai/math，家族 272）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf", label: "手稿：Entanglement with zero distillable secret key in local dimension ten（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["entanglement", "ppt-conjecture", "secret-key"]
  },
  {
    id: 'openai-mp-273',
    date: '2026-10-06', title: "熵光子数不等式",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "熵光子数不等式是量子光学中光束分束器输入输出之间的熵约束。 对任意有限模数下两个独立有限能量玻色输入的分束器混合，证明熵光子数不等式：输出的熵光子数至少为两输入的透射率加权平均。每个输入内部允许任意纠缠；乘积热态输入在熵不相等时也取等号。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/273.md", label: "形式化证明说明与比较器链接（openai/math，家族 273）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf", label: "手稿：The entropy photon-number inequality（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["entropy-photon-number", "bosonic-channels", "beam-splitter"]
  },
  {
    id: 'openai-mp-274',
    date: '2026-10-06', title: "QAC^0 的 Moore 奇偶猜想",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "QAC^0 是常数深度量子线路复杂性类，奇偶函数是检验其计算能力的标准问题。 在测量输出模型中解决 Moore 奇偶猜想：具有任意单量子比特门、无界元数 Toffoli 门和多项式多量子比特的常数深度量子线路，不能以任何固定的正最坏情形优势计算奇偶。辅助比特初态为零，只测量一个输出比特，其余寄存器可丢弃。Xu–Li 的归约对严格多数给出同样的有界误差障碍。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：4 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/274.md", label: "形式化证明说明与比较器链接（openai/math，家族 274）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf", label: "手稿：Product-projection localization and the QAC0 parity lower bound（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Regular-trajectories-pruning-and-quantum-parity-September-24-2026/paper.pdf", label: "手稿：Regular trajectories pruning and quantum parity（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["qac0", "parity", "quantum-circuits"]
  },
  {
    id: 'openai-mp-275',
    date: '2026-10-06', title: "连续 Coulomb 能量的 QMA 困难性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "电子库仑能量极小化是量子化学中求分子基态能量的问题；QMA 困难性描述其量子计算复杂度。 在完整含自旋费米子连续空间上取极小，证明三维电子 Coulomb 能量下确界近似的 QMA 困难性。确定性多项式时间归约在仅允许位于互异有理位置的单位电荷核、多项式多电子数和至少为 1 的能量阈值间隔时仍成立。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/275.md", label: "形式化证明说明与比较器链接（openai/math，家族 275）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026.pdf", label: "手稿：Continuum Coulomb hardness with binary nuclear charges（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/QMA-hardness-of-continuum-Coulomb-energy-with-unit-nuclear-charges-September-24-2026/QMA-hardness-of-continuum-Coulomb-energy-with-unit-nuclear-charges-September-24-2026.pdf", label: "手稿：QMA hardness of continuum Coulomb energy with unit nuclear charges（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["qma-hardness", "coulomb-energy", "complexity"]
  },
  {
    id: 'openai-mp-276',
    date: '2026-10-06', title: "广义振幅阻尼信道的经典容量",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "广义振幅阻尼信道描述量子比特的耗散与热噪声，经典容量是其无辅助通信的传输率上限。 确定任意单量子比特广义振幅阻尼信道（含全部阻尼与热参数）的无辅助经典容量。显式单变量优化给出容量，由独立二态信号系综配合联合解码达到；与任意有限维量子信道张量时，Holevo 容量、最小输出熵与正则化经典容量均具可加性。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/276.md", label: "形式化证明说明与比较器链接（openai/math，家族 276）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf", label: "手稿：Classical capacity and entropy inequalities for generalized amplitude damping（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["quantum-channel", "classical-capacity", "additivity"]
  },
  {
    id: 'openai-mp-277',
    date: '2026-10-06', title: "纠缠博弈的阈值重复",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "纠缠博弈刻画量子非局域性，阈值重复描述多次博弈中获胜比例的衰减。 对任意有限两人一轮博弈，证明指数阈值重复：若其纠缠值 v<1，则在 0<δ<1-v 时，k 次独立重复中赢得至少 v+δ 比例的概率随 k 指数衰减。允许任意有限维联合纠缠策略与相关问题分布。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/277.md", label: "形式化证明说明与比较器链接（openai/math，家族 277）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Threshold-parallel-repetition-for-finite-dimensional-entangled-games-September-25-2026/paper.pdf", label: "手稿：Threshold parallel repetition for finite-dimensional entangled games（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["entangled-games", "parallel-repetition", "threshold"]
  },
  {
    id: 'openai-mp-278',
    date: '2026-10-06', title: "Kohn–Sham 系综表示失效",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "math-ph",
    status: ['independent'],
    summary: "Kohn–Sham 方法是密度泛函理论中把相互作用体系映射为无相互作用体系的框架。 构造一个含两个相等正整数电荷核的三电子 Coulomb 分子，其绝对基态密度无法由 L^(3/2)(R^3)+L^∞(R^3) 中的单个实自旋无关局域势以无相互作用基态系综表示。这否证了该势类下的 Kohn–Sham 系综可表示性；所需核电荷以非数值方式给出。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/A-Coulomb-Ground-State-Density-without-Kohn-Sham-Ensemble-Representation-September-25-2026/paper.pdf", label: "手稿：A Coulomb ground-state density without Kohn-Sham ensemble representation（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["density-functional-theory", "kohn-sham", "coulomb"]
  },
  {
    id: 'openai-mp-279',
    date: '2026-10-06', title: "固定有限门集上的精确量子因数分解",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent', 'formal'],
    summary: "量子因数分解用量子线路分解整数的素因子，Shor 算法给出多项式时间的原型。 给出一个多项式时间的一致量子线路族，以概率一输出任意整数的完整素因数分解。门数与量子比特数均为输入长度的多项式，且一个固定的有限门集即可。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/279.md", label: "形式化证明说明与比较器链接（openai/math，家族 279）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Exact-quantum-factoring-over-a-fixed-finite-gate-set-September-25-2026/main.pdf", label: "手稿：Exact quantum factoring over a fixed finite gate set（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["quantum-factoring", "shor", "gate-set"]
  },
  {
    id: 'openai-mp-280',
    date: '2026-10-06', title: "强有理酉顶点算子代数的强局域性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "math-ph",
    status: ['independent', 'formal'],
    summary: "顶点算子代数是二维共形场论与弦论中局域算符的代数结构。 证明强局域性猜想的强有理情形：每个单的、酉的、强有理复顶点算子代数生成一个完全有理共形网，其单模可酉化，表示范畴作为辫酉张量范畴与该网的有限指数扇区一致。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/280.md", label: "形式化证明说明与比较器链接（openai/math，家族 280）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Strongly-rational-unitary-vertex-operator-algebras-and-conformal-nets-September-25-2026/paper.pdf", label: "手稿：Strongly rational unitary vertex operator algebras and conformal nets（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["vertex-operator-algebra", "conformal-net", "strong-locality"]
  },
  {
    id: 'openai-mp-281',
    date: '2026-10-06', title: "SK 模型上 QAOA 的最优性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "cond-mat",
    status: ['independent', 'formal'],
    summary: "Sherrington–Kirkpatrick 模型是自旋玻璃的原型，QAOA 是用量子线路求基态的变分算法。 在系统规模先于线路深度趋于无穷的次序下，证明 QAOA 趋近高斯零场 Sherrington–Kirkpatrick 模型的基态能量。对任意精度，有限深度与不依赖规模和无序的确定性角度即可达到所需的每自旋极限期望能量。同族还给出大度数随机正则图上领先阶最优的期望 MaxCut 值，次序为规模先于度数趋于无穷。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/281.md", label: "形式化证明说明与比较器链接（openai/math，家族 281）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026.pdf", label: "手稿：QAOA attains the SK ground-state energy in the thermodynamic-first limit（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Full-support-of-the-zero-temperature-Sherrington-Kirkpatrick-order-parameter-September-27-2026/main.pdf", label: "手稿：Full support of the zero temperature Sherrington Kirkpatrick order parameter（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["qaoa", "sherrington-kirkpatrick", "maxcut"]
  },
  {
    id: 'openai-mp-282',
    date: '2026-10-06', title: "四维量子场论中由尺度对称性到共形对称性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "hep-th",
    status: ['independent'],
    summary: "共形对称性是量子场论中强于尺度对称的对称性，约束关联函数与应力张量。 在给定的有界局域网与场重建假设下，对具有离散、有下界、有限重数的标度谱、有限标度支撑和物理局域标度流的四维酉正能量理论，证明尺度对称性蕴含局域共形对称性。应力张量可作无迹改进且时空荷不变。结论涉及局域 Ward 恒等式，而非整个网上的全局共形作用。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Scale-and-conformal-symmetry-in-four-dimensional-operational-quantum-field-theory-September-26-2026/main.pdf", label: "手稿：Scale and conformal symmetry in four-dimensional operational quantum field theory（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["quantum-field-theory", "conformal-symmetry", "ward-identity"]
  },
  {
    id: 'openai-mp-283',
    date: '2026-10-06', title: "由布尔预言机出发的多项式时间常数误差酉合成",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent'],
    summary: "酉合成把任意量子演化分解到有限门集上的线路，是量子线路编译的基础问题。 解决常数误差 Aaronson–Kuperberg 酉合成问题：在选取合适的布尔预言机后，一个一致的多项式规模量子预言机线路可在钻石范数误差 1/2 内逼近任意 n 量子比特酉信道。门数、量子比特数、预言机调用次数与查询长度均为多项式有界；该依赖目标的预言机可有不受限真值表，不对其高效经典构造作断言。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf", label: "手稿：Polynomial-Time Unitary Synthesis from a Boolean Oracle（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["unitary-synthesis", "oracle", "quantum-complexity"]
  },
  {
    id: 'openai-mp-284',
    date: '2026-10-06', title: "随机化与量子查询复杂度的最优指数",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: "quant-ph",
    status: ['independent'],
    summary: "查询复杂度计算量子算法访问输入的次数，量子与随机化查询的分离反映量子加速的限度。 证明全布尔函数的一致界 R(f)=O((1+Q(f))^4) 在指数上是最优的，排除任何更小的幂，并否证所猜测的三次关系。R 与 Q 分别为误差至多 1/3 的随机化与量子最坏情形比特查询复杂度，查询之间的计算不受限制。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/A-Nearly-Quartic-Separation-Between-Randomized-and-Quantum-Query-Complexity-October-5-2026/quartic-query-separation.pdf", label: "手稿：A Nearly Quartic Separation Between Randomized and Quantum Query Complexity（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["query-complexity", "boolean-functions", "separation"]
  },
  {
    id: 'openai-sm-211',
    date: '2026-10-06', title: "随机平面地图的几何、扩散与谱",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "随机平面地图是二维量子引力的离散模型，Liouville 量子重力球面是其连续极限。 对 0<q≤4 的临界 Fortuin–Kasteleyn 平面地图，证明其收敛到 Liouville 量子重力球面；q>4 时收敛到布朗连续随机树，给出曲面到树的几何转变。对 FK–Ising 与生成树加权地图，平稳随机游走收敛到极限球面上的 Liouville 布朗运动；FK–Ising 的谱结果还给出特征值与热迹的收敛。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/211.md", label: "形式化证明说明与比较器链接（openai/math，家族 211）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Random-Walks-on-Critical-FK-Ising-Maps-and-Liouville-Brownian-Motion-October-5-2026/fk-ising-walk-limit.pdf", label: "手稿：Random Walks on Critical FK–Ising Maps and Liouville Brownian Motion（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Spectral-convergence-for-critical-FK-Ising-planar-maps-October-5-2026/spectral-convergence-critical-fk-ising-planar-maps.pdf", label: "手稿：Spectral convergence for critical FK Ising planar maps（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-Linear-Clock-for-Random-Walk-on-Tree-Weighted-Planar-Maps-October-5-2026/linear-clock-random-walk-tree-weighted-planar-maps.pdf", label: "手稿：A Linear Clock for Random Walk on Tree Weighted Planar Maps（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Canonical-conformal-limits-of-subcritical-FK-planar-maps-September-24-2026/main.pdf", label: "手稿：Canonical conformal limits of subcritical FK planar maps（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-critical-Liouville-quantum-sphere-and-geometric-limits-of-FK-maps-at-q-equals-4-September-24-2026/main.pdf", label: "手稿：The critical Liouville quantum sphere and geometric limits of FK maps at q equals 4（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Metric-measure-limits-of-subcritical-FK-and-spanning-tree-planar-maps-September-24-2026/main.pdf", label: "手稿：Metric measure limits of subcritical FK and spanning tree planar maps（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Brownian-continuum-random-tree-limits-of-finite-Fortuin-Kasteleyn-maps-above-four-September-24-2026/main.pdf", label: "手稿：Brownian continuum random tree limits of finite Fortuin Kasteleyn maps above four（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["liouville-quantum-gravity", "planar-maps", "random-walk"]
  },
  {
    id: 'openai-sm-212',
    date: '2026-10-06', title: "平面首穿渗流中无双向无限测地线及光滑极限形状",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "首穿渗流描述随机权重网络中传播前沿的形状与到达时间。 对独立同分布非负无原子边权，当四个边权的最小值具有有限二阶矩时，证明平面首穿渗流不存在双向无限测地线。对指数权重，极限形状严格凸且边界为 C¹；对具有正形状参数与速率的 Gamma 分布，可微性同样成立。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/212.md", label: "形式化证明说明与比较器链接（openai/math，家族 212）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/No-bigeodesics-in-planar-first-passage-percolation-September-24-2026/main.pdf", label: "手稿：No bigeodesics in planar first-passage percolation（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Strict-convexity-and-differentiability-of-the-planar-exponential-first-passage-limit-shape-September-24-2026/main.pdf", label: "手稿：Strict convexity and differentiability of the planar exponential first passage limit shape（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["first-passage-percolation", "limit-shape", "bigeodesic"]
  },
  {
    id: 'openai-sm-213',
    date: '2026-10-06', title: "拟传递图上临界概率处无无限簇",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "渗流的临界概率是随机网络中无限连通簇开始出现的相变阈值。 解决 Benjamini–Schramm 临界性猜想：在每个 p_c<1 的无限连通局部有限拟传递图上的 Bernoulli 键渗流中，临界概率处几乎必然不存在无限簇。结论也覆盖 Z³ 上的最近邻键渗流与点渗流。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/213.md", label: "形式化证明说明与比较器链接（openai/math，家族 213）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Critical-bond-and-site-percolation-on-the-cubic-lattice-September-24-2026/paper.pdf", label: "手稿：Critical bond and site percolation on the cubic lattice（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/No-percolation-at-criticality-on-quasi-transitive-graphs-September-24-2026/paper.pdf", label: "手稿：No percolation at criticality on quasi transitive graphs（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["percolation", "criticality", "quasi-transitive"]
  },
  {
    id: 'openai-sm-214',
    date: '2026-10-06', title: "Benjamini–Schramm 非唯一性猜想",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "渗流中 p_c<p_u 表示存在一段概率区间，网络中同时有多个无限簇。 证明每个无限连通、局部有限、非 amenability 的拟传递图上 Bernoulli 键渗流满足 p_c<p_u，即存在一个非空概率区间，其中几乎必然存在无穷多个无限簇。更强的算子界同时确立临界三角条件。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：2 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/214.md", label: "形式化证明说明与比较器链接（openai/math，家族 214）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-of-percolation-on-nonamenable-quasi-transitive-graphs-September-24-2026/paper.pdf", label: "手稿：Nonuniqueness of percolation on nonamenable quasi-transitive graphs（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["percolation", "nonamenable", "pc-pu"]
  },
  {
    id: 'openai-sm-215',
    date: '2026-10-06', title: "平面 O(n) 模型的有质量连续极限与精确质量渐近",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "O(n) 模型是自旋取值为 n 维向量的格点模型，其连续极限给出量子场论；质量隙是基态与第一激发态的能量差。 构造二维最近邻 O(3) 模型的规范连续极限：一个具有唯一真空和正质量隙的非高斯定域相对论理论。对方格 O(4) 模型，给出完整转移隙的领先渐近 m_lat(β)∼32 e^(π/4−1/2) √β e^(−πβ)。同族还证明 n≥3 的二维最近邻 O(n) 模型在任意正温度下自旋关联指数衰减。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://rstudio-pubs-static.s3.amazonaws.com/1466176_bdf8056ff8a841baa317d4ad53d0411b.html", label: "数值检验（家族 215 与 271 共用脚本）：Bloch 系数与晶格修正与手稿公式吻合；O(4) 质量隙在可及关联长度下高出渐近公式 11–15%，无法独立确认前因子。作者明确注明此检验不构成定理证明（John Akwei，2026-10-07）", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/215.md", label: "形式化证明说明与比较器链接（openai/math，家族 215）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-canonical-massive-continuum-limit-of-the-two-dimensional-O3-model-October-4-2026/massive-continuum-o3.pdf", label: "手稿：The canonical massive continuum limit of the two-dimensional O(3) model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/An-Isolated-Particle-Pole-for-the-Two-Dimensional-O3-Spin-Field-October-4-2026/o3-particle-pole.pdf", label: "手稿：An Isolated Particle Pole for the Two Dimensional O3 Spin Field（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Exact-mass-asymptotics-for-the-two-dimensional-O4-lattice-model-October-5-2026/exact-mass-o4.pdf", label: "手稿：Exact mass asymptotics for the two dimensional O4 lattice model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Sharp-mass-bounds-for-the-two-dimensional-O4-model-September-23-2026/paper.pdf", label: "手稿：Sharp mass bounds for the two dimensional O4 model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Exponential-decay-in-two-dimensional-classical-On-models-September-23-2026/paper.pdf", label: "手稿：Exponential decay in two dimensional classical On models（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["o(n)-model", "mass-gap", "continuum-limit"]
  },
  {
    id: 'openai-sm-216',
    date: '2026-10-06', title: "平面 XY 模型的临界对数修正与 BKT 标度",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "XY 模型描述平面转子自旋，BKT 相变由涡旋与反涡旋解绑驱动。 对方格最近邻余弦 XY 模型，证明临界轴关联 C(β_c,r)∼A r^(−1/4)(log r)^(1/8) 与 Berezinskii–Kosterlitz–Thouless 本征奇异性 √(β_c−β) log ξ(β)→B，其中 A,B>0。对含最近邻的有限方格对称相互作用，离散高斯高度在整个粗糙相（含其阈值）收敛到高斯场。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-critical-logarithmic-correction-for-the-planar-XY-model-October-5-2026/paper.pdf", label: "手稿：The critical logarithmic correction for the planar XY model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Critical-Center-Magnetization-in-the-Planar-XY-Model-October-5-2026/paper.pdf", label: "手稿：Critical Center Magnetization in the Planar XY Model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-Critical-Spin-Field-of-the-Planar-XY-Model-October-5-2026/paper.pdf", label: "手稿：The Critical Spin Field of the Planar XY Model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Essential-Singularity-of-the-Correlation-Length-in-the-Planar-XY-Model-October-5-2026/paper.pdf", label: "手稿：Essential Singularity of the Correlation Length in the Planar XY Model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-critical-correlation-exponent-of-the-planar-XY-model-September-24-2026/paper.pdf", label: "手稿：The critical correlation exponent of the planar XY model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/BKT-universality-for-height-and-planar-spin-fields-September-24-2026/paper.pdf", label: "手稿：BKT universality for height and planar spin fields（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["xy-model", "bkt-transition", "critical-exponent"]
  },
  {
    id: 'openai-sm-217',
    date: '2026-10-06', title: "Sherrington–Kirkpatrick 模型的低温涨落律",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "Sherrington–Kirkpatrick 模型是自旋玻璃的均值场原型，自由能涨落描述热力学量的样本波动。 对每个固定逆温 β>1，确定零场高斯 Sherrington–Kirkpatrick 对数配分函数的涨落尺度与极限律：方差渐近于 c_β n^(1/3)（c_β>0），对应所预言的 n^(1/6) 标准差尺度。精确中心化与标准化后得到到唯一确定的非退化律的全序列收敛。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026.pdf", label: "手稿：The low-temperature Sherrington–Kirkpatrick free-energy limiting law（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026.pdf", label: "手稿：The low temperature Sherrington Kirkpatrick fluctuation scale（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["spin-glass", "sherrington-kirkpatrick", "fluctuation-law"]
  },
  {
    id: 'openai-sm-218',
    date: '2026-10-06', title: "弱相互作用与无序 Ising 模型的共形普适性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "二维 Ising 模型临界界面的极限由共形场论描述，普适性指不同微观模型共享同一临界极限。 对方格 Ising 模型的弱有限程方格对称偶多自旋扰动，证明临界体自旋与能量极限保持不变；弱方格对称轮廓相互作用也给出弦 SLE₃ 界面极限。在充分弱的独立同分布键无序（任意固定有限非退化零均值分布）下，临界自旋界面在环境概率意义下收敛到同一律。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/218.md", label: "形式化证明说明与比较器链接（openai/math，家族 218）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-limits-for-general-weak-random-bond-Ising-models-October-5-2026/general-weak-random-bond-ising.pdf", label: "手稿：Quenched SLE₃ limits for general weak random-bond Ising models（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-Universality-for-the-Weak-Random-Bond-Ising-Model-October-5-2026/quenched-sle3-weak-random-bond-ising.pdf", label: "手稿：Quenched SLE3 Universality for the Weak Random Bond Ising Model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Logarithmic-Relative-Fluctuations-in-the-Weakly-Disordered-Planar-Ising-Model-October-5-2026/critical-relative-second-moment-weak-random-bond-ising.pdf", label: "手稿：Logarithmic Relative Fluctuations in the Weakly Disordered Planar Ising Model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Conformal-universality-of-bulk-Ising-correlations-under-weak-interactions-September-23-2026/paper.pdf", label: "手稿：Conformal universality of bulk Ising correlations under weak interactions（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/SLE3-universality-for-weak-finite-range-Ising-interactions-September-23-2026/paper.pdf", label: "手稿：SLE3 universality for weak finite range Ising interactions（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Buffered-comparison-and-stopping-band-resolution-in-critical-Ising-September-23-2026/paper.pdf", label: "手稿：Buffered comparison and stopping band resolution in critical Ising（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["ising-model", "conformal-universality", "sle"]
  },
  {
    id: 'openai-sm-219',
    date: '2026-10-06', title: "弱无序随机正则图的 GOE 普适性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "随机矩阵的高斯正交系综描述无序量子系统的能级统计，Anderson 无序使系统趋于局域化。 对每个固定度数 d≥3，一致随机简单 d-正则图的体邻接特征值点过程收敛到高斯正交系综律，包括三次图。在充分弱的固定独立同分布均匀对角无序下，同一固定能量普适性在干净谱边内部的紧致能带上仍成立。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Fixed-energy-universality-for-weak-Anderson-disorder-on-random-regular-graphs-October-5-2026/fixed-energy-universality-weak-anderson-disorder-random-regular-graphs.pdf", label: "手稿：Fixed-energy universality for weak Anderson disorder on random regular graphs（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/GOE-bulk-universality-for-fixed-degree-random-regular-graphs-September-23-2026/paper.pdf", label: "手稿：GOE bulk universality for fixed degree random regular graphs（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["random-matrix", "anderson-disorder", "goe"]
  },
  {
    id: 'openai-sm-221',
    date: '2026-10-06', title: "稀释自旋玻璃的 Mézard–Parisi 公式",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "Mézard–Parisi 公式给出平均场自旋玻璃的自由能。 对满足 Panchenko–Talagrand 分解与正性假设、且仅需一阶矩可积的 Poisson 稀释偶元 Ising 模型，证明 Mézard–Parisi 分层腔公式：极限自由能等于有限深度分层试探律上的下确界。结果涵盖 Viana–Bray 模型、对称稀释偶自旋模型与加权软偶 K 可满足性。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/221.md", label: "形式化证明说明与比较器链接（openai/math，家族 221）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf", label: "手稿：The Mézard–Parisi formula for diluted spin glasses（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" },
      { url: "https://github.com/openai/math/blob/main/reasoning_traces/mezard-parisi-formula.pdf", label: "推理摘要：稀释自旋玻璃的 Mézard–Parisi 公式（openai/math）" }
    ],
    tags: ["spin-glass", "mezard-parisi", "free-energy"]
  },
  {
    id: 'openai-sm-222',
    date: '2026-10-06', title: "感知机自由能与微观堵塞",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "感知机模型来自神经网络，其自由能与高维随机约束系统的堵塞阈值相对应。 对高斯 Ising 感知机（有界 Borel 对数势）与高斯球形感知机（有界连续势），在每个正图样密度下确定有限温度变分自由能。球形推广处理双正交不变无序，极限奇异值分布紧致且无离群值。在边界 −1 处，二次惩罚球形模型具有尖锐可行性阈值及极限间隙与力律，取极限次序为系统规模、零温、临界密度。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：3 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/222.md", label: "形式化证明说明与比较器链接（openai/math，家族 222）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-Ising-random-perceptron-September-24-2026/The-free-energy-of-the-Ising-random-perceptron-September-24-2026.pdf", label: "手稿：The free energy of the Ising random perceptron（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Microscopic-jamming-in-the-negative-spherical-perceptron-September-24-2026/Microscopic-jamming-in-the-negative-spherical-perceptron-September-24-2026.pdf", label: "手稿：Microscopic jamming in the negative spherical perceptron（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-spherical-perceptron-with-bi-orthogonally-invariant-disorder-September-24-2026/The-spherical-perceptron-with-bi-orthogonally-invariant-disorder-September-24-2026.pdf", label: "手稿：The spherical perceptron with bi orthogonally invariant disorder（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-spherical-random-perceptron-September-24-2026/The-free-energy-of-the-spherical-random-perceptron-September-24-2026.pdf", label: "手稿：The free energy of the spherical random perceptron（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["perceptron", "jamming", "free-energy"]
  },
  {
    id: 'openai-sm-223',
    date: '2026-10-06', title: "方格随机簇界面的共形极限",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "随机簇模型统一描述 Ising 与 Potts 等自旋模型，临界界面的极限由 SLE 与 CLE 刻画。 对 0<q≤4 的临界方格随机簇界面证明弦 SLE_κ 极限，κ=4π/arccos(−√q/2)：q≥1 允许有界 Jordan 域，q<1 允许光滑 Jordan 域。对 1≤q≤4，完整嵌套平面环收敛到 CLE_κ。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Square-lattice-FK-interfaces-and-nested-loops-for-1-leq-q-lt-4-September-23-2026/paper.pdf", label: "手稿：Square-lattice FK interfaces and nested loops for 1 <= q < 4（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Self-dual-random-cluster-interfaces-below-one-September-23-2026/paper.pdf", label: "手稿：Self dual random cluster interfaces below one（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE-Universality-for-Weakly-Disordered-FK-Ising-Interfaces-October-5-2026/quenched-fk-ising.pdf", label: "手稿：Quenched SLE Universality for Weakly Disordered FK Ising Interfaces（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Thermal-FK-Ising-interfaces-and-massive-SLE-October-5-2026/paper.pdf", label: "手稿：Thermal FK Ising interfaces and massive SLE（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Natural-Occupation-Measures-for-Critical-Square-Lattice-FK-Interfaces-October-5-2026/natural-occupation-measures-critical-square-lattice-fk-interfaces.pdf", label: "手稿：Natural Occupation Measures for Critical Square Lattice FK Interfaces（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Conformal-Limits-of-Critical-Square-Lattice-Random-Cluster-Interfaces-October-5-2026/paper.pdf", label: "手稿：Conformal Limits of Critical Square Lattice Random Cluster Interfaces（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["random-cluster", "sle", "conformal-loop-ensemble"]
  },
  {
    id: 'openai-sm-224',
    date: '2026-10-06', title: "Voronoi 渗流的临界与近临界普适性",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "Cardy 公式给出二维临界渗流穿越概率的共形不变表达式。 在每个有界 Jordan 四边形中证明退火临界 Poisson–Voronoi 穿越概率的 Cardy 公式。各模型按自身期望单位方形枢纽数归一化后，有理多边形上的条件联合近临界穿越阈值律在环境概率下收敛到三角格参考律，由此确立穿越阈值的淬火近临界普适性。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/From-critical-crossings-to-quenched-near-critical-universality-in-Voronoi-percolation-October-5-2026/critical-crossings-quenched-near-critical-universality-voronoi-percolation.pdf", label: "手稿：From critical crossings to quenched near-critical universality in Voronoi percolation（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-Pivotal-Amplitude-for-Voronoi-Percolation-from-Cardys-Formula-October-5-2026/voronoi-pivotal-amplitude.pdf", label: "手稿：A Pivotal Amplitude for Voronoi Percolation from Cardys Formula（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Cardys-formula-for-critical-Poisson-Voronoi-percolation-September-23-2026/paper.pdf", label: "手稿：Cardys formula for critical Poisson Voronoi percolation（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["percolation", "cardy-formula", "universality"]
  },
  {
    id: 'openai-sm-225',
    date: '2026-10-06', title: "平衡六顶点模型的高斯自由场极限",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "六顶点模型是冰与铁电体的统计模型，其高度场在临界区间收敛到高斯自由场。 平衡方格六顶点高度场在 a=b=1、0<c≤2 时收敛到高斯自由场，包括端点 c=2；平面态由平衡环面极限定义。对单位高度增量与 Green 核 −(2π)⁻¹ log|x−y|，精确方差乘子为 1/arcsin(c/2)。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026/The-Gaussian-free-field-limit-of-the-balanced-six-vertex-model-with-variance-multiplier-1-over-arcsin-c-over-2-September-23-2026.pdf", label: "手稿：The Gaussian free field limit of the balanced six-vertex model with variance multiplier 1/arcsin(c/2)（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["six-vertex-model", "gaussian-free-field", "height-model"]
  },
  {
    id: 'openai-sm-226',
    date: '2026-10-06', title: "半平面双二聚体的 CLE₄ 猜想",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "二聚体模型描述格点上的完美匹配，其环集的极限是共形不变曲线 CLE4。 解决双二聚体缩放极限猜想的半平面 Temperleyan 形式：Temperleyan 方格上两个独立二聚体覆盖形成的完整环集收敛到嵌套 CLE₄。每个宏观环作为无参数曲线收敛，将环可观测量的收敛提升为环本身的收敛。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-curve-scaling-limit-of-half-plane-double-dimers-September-23-2026/paper.pdf", label: "手稿：The curve scaling limit of half-plane double dimers（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["dimer-model", "cle4", "scaling-limit"]
  },
  {
    id: 'openai-sm-227',
    date: '2026-10-06', title: "Sherrington–Kirkpatrick 模型中的动力学相变",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "自旋玻璃弛豫动力学中，cutoff 与混合时间刻画体系达到平衡的快慢。 对零场高斯 SK 热浴动力学（每自旋速率一更新），证明：固定 0≤β<1 时从最坏初态出发在 log n 尺度上出现 cutoff；β=1 时混合时间为 n^(2/3+o(1))；β>1 时从 Gibbs 采样的固定初态出发为拉伸指数混合，均在无序的概率意义下成立。临界处重标度的平稳与淬火自关联过程具有通用随机极限。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：5 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/227.md", label: "形式化证明说明与比较器链接（openai/math，家族 227）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Universality-of-critical-quench-autocorrelations-in-the-Sherrington-Kirkpatrick-model-October-5-2026/main.pdf", label: "手稿：Universality of critical quench autocorrelations in the Sherrington–Kirkpatrick model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Functional-universality-of-critical-SK-autocorrelations-October-5-2026/critical-sk-autocorrelations.pdf", label: "手稿：Functional universality of critical SK autocorrelations（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-spectral-gap-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026/main.pdf", label: "手稿：A spectral gap throughout the high temperature Sherrington Kirkpatrick phase（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Cutoff-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026/paper.pdf", label: "手稿：Cutoff throughout the high temperature Sherrington Kirkpatrick phase（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Critical-slowing-down-in-the-Sherrington-Kirkpatrick-model-September-24-2026/paper.pdf", label: "手稿：Critical slowing down in the Sherrington Kirkpatrick model（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Stretched-exponential-barriers-for-typical-SK-initial-states-September-24-2026/paper.pdf", label: "手稿：Stretched exponential barriers for typical SK initial states（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-typical-start-upper-bound-for-low-temperature-SK-Glauber-dynamics-September-24-2026/paper.pdf", label: "手稿：A typical start upper bound for low temperature SK Glauber dynamics（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Critical-mixing-in-the-Sherrington-Kirkpatrick-model-September-25-2026/paper.pdf", label: "手稿：Critical mixing in the Sherrington Kirkpatrick model（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["spin-glass", "dynamics", "mixing-time"]
  },
  {
    id: 'openai-sm-228',
    date: '2026-10-06', title: "径向对势的连续相变",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "一阶相变是自由能导数在相变点不连续的相变，对应流体中的液气相变类型。 为三维经典粒子构造稳定的距离依赖对相互作用，具有一阶相变：规范自由能在某个逆温处有导数跳跃，并在整个开密度区间内成立。其中一个势具有发散排斥核，另一个有界连续并带可积幂律尾，实现 Simon 连续问题中所寻求的相变类型。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：3 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/228.md", label: "形式化证明说明与比较器链接（openai/math，家族 228）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/A-continuum-temperature-singularity-for-a-radial-pair-potential-September-24-2026/paper.pdf", label: "手稿：A continuum temperature singularity for a radial pair potential（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/A-radial-continuum-phase-transition-with-algebraic-decay-September-24-2026/paper.pdf", label: "手稿：A radial continuum phase transition with algebraic decay（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["phase-transition", "pair-potential", "statistical-mechanics"]
  },
  {
    id: 'openai-sm-230',
    date: '2026-10-06', title: "SLE 的精确 Hausdorff 测度",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "SLE 是二维临界统计模型界面的随机曲线，Hausdorff 测度刻画其分形尺度。 解决 Schramm 关于弦 SLE_κ（0<κ<8）的 Hausdorff 测度问题：显式规范 r^d (log log(1/r))^((2−d)/2)，d=1+κ/8，对每条轨迹段 γ([s,t])（0<s<t<∞）几乎必然给出正的有限测度，并在每个有界圆盘内对轨迹给出有限期望测度。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/230.md", label: "形式化证明说明与比较器链接（openai/math，家族 230）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/An-exact-Hausdorff-gauge-for-SLE-September-25-2026/An-exact-Hausdorff-gauge-for-SLE-September-25-2026.pdf", label: "手稿：An exact Hausdorff gauge for SLE（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/An-explicit-exact-Hausdorff-gauge-for-SLE-September-26-2026/An-explicit-exact-Hausdorff-gauge-for-SLE-September-26-2026.pdf", label: "手稿：An explicit exact Hausdorff gauge for SLE（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["sle", "hausdorff-measure", "fractal"]
  },
  {
    id: 'openai-sm-232',
    date: '2026-10-06', title: "Lipschitz 高度模型的高斯场与 SLE 界面",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "高度模型描述晶面粗糙化，高斯自由场是其临界涨落的连续极限。 对有界光滑单连通域上的三角格高度模型，证明高斯自由场极限：均匀奇高度（增量 0、±2，双弧边界值 ±1）与零边界整数 Lipschitz 高度（权重 x∈[1/√2,1]）。均匀实 Lipschitz 高度也收敛到高斯场；在调好的相反边界振幅下，其界面收敛到弦 SLE₄，确立 Schramm 的实场与界面预测。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Gaussian-free-field-limits-of-weighted-integer-Lipschitz-heights-October-6-2026/paper.pdf", label: "手稿：Gaussian free-field limits of weighted integer Lipschitz heights（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-integer-Lipschitz-heights-with-two-arc-boundary-data-October-6-2026/paper.pdf", label: "手稿：The Gaussian free field limit of integer Lipschitz heights with two arc boundary data（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Uniform-real-Lipschitz-surfaces-on-the-triangular-lattice-October-6-2026/paper.pdf", label: "手稿：Uniform real Lipschitz surfaces on the triangular lattice（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Gaussian-free-field-limits-of-weighted-integer-Lipschitz-heights-September-25-2026/paper.pdf", label: "手稿：Gaussian free field limits of weighted integer Lipschitz heights（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-Gaussian-free-field-limit-of-integer-Lipschitz-heights-with-two-arc-boundary-data-September-25-2026/paper.pdf", label: "手稿：The Gaussian free field limit of integer Lipschitz heights with two arc boundary data（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Uniform-real-Lipschitz-surfaces-on-the-triangular-lattice-September-25-2026/paper.pdf", label: "手稿：Uniform real Lipschitz surfaces on the triangular lattice（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["height-model", "gaussian-free-field", "sle4"]
  },
  {
    id: 'openai-sm-233',
    date: '2026-10-06', title: "临界 Ashkin–Teller 联合标度极限",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent'],
    summary: "Ashkin–Teller 模型由两个耦合的 Ising 模型构成，具有一段临界线。 沿整条临界线（含四态 Potts 端点）确定 Ashkin–Teller 高度与两组完整电流簇的联合缩放极限。在有界 Jordan 域及允许的格点逼近、线 primal 与自由对偶边界下，高度收敛到所预测的高斯自由场，电流簇收敛到同一场的规范递归集，保留所有嵌套深度。",
    verification: [

    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/The-joint-scaling-limit-of-critical-Ashkin-Teller-currents-October-6-2026/main.pdf", label: "手稿：The joint scaling limit of critical Ashkin-Teller currents（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/The-joint-scaling-limit-of-critical-Ashkin-Teller-currents-September-25-2026/main.pdf", label: "手稿：The joint scaling limit of critical Ashkin Teller currents（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["ashkin-teller", "potts-model", "gaussian-free-field"]
  },
  {
    id: 'openai-sm-234',
    date: '2026-10-06', title: "正交不变 Ising 自旋玻璃的全温度压强",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "压强（自由能）是自旋玻璃热力学的宏观量，给出体系的热力学行为。 对每个固定温度，给出正交不变 Ising 自旋玻璃极限压强的精确变分公式，几乎必然与期望意义下均成立。耦合矩阵为某个确定性谱的 Haar 随机旋转，该谱收敛到紧支撑律，极端特征值收敛到支撑边界。零温基态能量作为温度趋于零的情形得出。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：1 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/234.md", label: "形式化证明说明与比较器链接（openai/math，家族 234）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/All-temperature-pressure-for-orthogonally-invariant-Ising-spin-glasses-September-25-2026/paper.pdf", label: "手稿：All-temperature pressure for orthogonally invariant Ising spin glasses（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["spin-glass", "pressure", "variational-formula"]
  },
  {
    id: 'openai-sm-237',
    date: '2026-10-06', title: "蜂窝格自避行走的四分之三直径指数",
    event: "OpenAI 发布 721 篇数学研究成果手稿",
    org: 'OpenAI', field: 'stat-mech',
    status: ['independent', 'formal'],
    summary: "自避行走是高分子链的离散模型，直径指数是临界现象的普适指数。 证明 Nienhuis 预测的四分之三指数的直径形式：蜂窝格上均匀选取的 n 步自避行走的直径为 n^(3/4+o(1))，其局部质量与覆盖数指数为 4/3。这些估计在充分大的每个固定长度上成立，跨尺度同时成立，且具有任意高的多项式概率。",
    verification: [
      { url: "https://github.com/mathcommunity/oai-math-revised/blob/main/checks/comparator-2026-10-26/results.tsv", label: "社区独立 Lean 复跑：4 项比较器挑战全部通过（oai-math-revised，2026-10-26；仅机器重跑形式化证明，未人工核对形式化陈述是否忠实于论文）", status: 'independent' },
      { url: "https://github.com/mathcommunity/oai-math-revised", label: "第三方社区改写与核验项目主页：oai-math-revised", status: 'independent' },
      { url: "https://github.com/openai/math/blob/main/lean/docs/237.md", label: "形式化证明说明与比较器链接（openai/math，家族 237）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/openai/math/blob/main/preprints/Radial-transfer-estimates-and-polygon-length-laws-for-honeycomb-walks-September-26-2026/main.pdf", label: "手稿：Radial transfer estimates and polygon length laws for honeycomb walks（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Critical-honeycomb-chords-with-prescribed-boundary-endpoints-September-26-2026/main.pdf", label: "手稿：Critical honeycomb chords with prescribed boundary endpoints（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Cylinder-loop-weights-and-planar-nesting-September-26-2026/main.pdf", label: "手稿：Cylinder loop weights and planar nesting（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Mass-and-covering-exponents-for-fixed-length-honeycomb-walks-September-26-2026/main.pdf", label: "手稿：Mass and covering exponents for fixed length honeycomb walks（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Signed-cylinder-propagation-and-marked-polygons-on-the-honeycomb-lattice-September-26-2026/main.pdf", label: "手稿：Signed cylinder propagation and marked polygons on the honeycomb lattice（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Cylinder-amplitudes-and-logarithmic-bridge-length-windows-on-the-honeycomb-lattice-September-26-2026/main.pdf", label: "手稿：Cylinder amplitudes and logarithmic bridge length windows on the honeycomb lattice（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Marked-polygon-correlations-and-one-arc-bounds-September-26-2026/main.pdf", label: "手稿：Marked polygon correlations and one arc bounds（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Disk-transfer-representations-and-confined-bridge-mass-September-26-2026/main.pdf", label: "手稿：Disk transfer representations and confined bridge mass（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Polynomial-vacuum-representations-and-bridge-mass-for-honeycomb-walks-September-26-2026/main.pdf", label: "手稿：Polynomial vacuum representations and bridge mass for honeycomb walks（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Renewal-and-changes-of-law-for-critical-honeycomb-walks-September-26-2026/main.pdf", label: "手稿：Renewal and changes of law for critical honeycomb walks（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Critical-strip-crossing-mass-on-the-honeycomb-lattice-September-26-2026/main.pdf", label: "手稿：Critical strip crossing mass on the honeycomb lattice（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Uniform-marked-polygon-estimates-and-sharp-finite-bridge-moments-September-26-2026/main.pdf", label: "手稿：Uniform marked polygon estimates and sharp finite bridge moments（openai/math）" },
      { url: "https://github.com/openai/math/blob/main/preprints/Cap-selected-amplitudes-and-triangle-chords-for-honeycomb-walks-September-26-2026/main.pdf", label: "手稿：Cap selected amplitudes and triangle chords for honeycomb walks（openai/math）" },
      { url: "https://openai.com/index/sharing-ai-progress-in-mathematics/", label: "成果公告（OpenAI，2026-10-06）" }
    ],
    tags: ["self-avoiding-walk", "exponent", "honeycomb-lattice"]
  },
  {
    id: 'psi-oqp-02',
    date: '2026-10-23', title: "OQP 2：三份 Werner 态的不可蒸馏性界",
    event: "PSI 发布五项量子信息开放问题研究成果",
    org: 'PSI', field: 'quant-ph',
    status: ['independent', 'formal'],
    summary: "Werner 态是两体系统中与交换算符 F 相关的混合态，密度矩阵正比于 I−αF。对局部维数 d≥3，在 1/d<α≤37/80（0.4625）时，三份 Werner 态无法蒸馏出 Bell 对；三维与四维的三拷贝阈值 α=1/2 在此前证书中已经给出，任意多拷贝的问题仍未解决。",
    verification: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp02-three-copy-werner/lean", label: "Lean 形式化说明与证明文件（PSI，oqp-batch-2026，OQP 2）", status: 'formal' },
      { url: "https://doi.org/10.5281/zenodo.23134454", label: "早期三维证书：三拷贝 Werner 态阈值 α=1/2（独立发表；仅覆盖 d=3）", status: 'independent' },
      { url: "https://github.com/GLiuax/d4-three-copy-werner", label: "早期四维证书：三拷贝 Werner 态阈值 α=1/2（独立发表；仅覆盖 d=4）", status: 'independent' }
    ],
    links: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp02-three-copy-werner/paper/oqp02-three-copy-werner.pdf", label: "手稿：Three copies of the Werner state: the sharp curve in dimensions three and four and a bound in every dimension（PSI）" },
      { url: "https://psi.inc/research/oqp-batch-2026/", label: "成果公告：Five results on Open Quantum Problems（PSI，2026-10-23）" },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp02-three-copy-werner/README.md", label: "结果说明：定理陈述与配套文件导览（PSI）" }
    ],
    tags: ["quantum-information", "entanglement-distillation", "werner-state"]
  },
  {
    id: 'psi-oqp-12',
    date: '2026-10-23', title: "OQP 12：长程真空关联的 Bell 不等式界",
    event: "PSI 发布五项量子信息开放问题研究成果",
    org: 'PSI', field: 'quant-ph',
    status: ['formal'],
    summary: "在 3+1 维有质量自由标量场的真空中，取两个固定形状的有界区域。证明当两个区域的间距超过某个有限值后，不存在局域可观测量使 CHSH 不等式违反经典界；两区域在任意距离上仍保持纠缠。",
    verification: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp12-vacuum-bell-correlations/lean", label: "Lean 形式化说明与证明文件（PSI，oqp-batch-2026，OQP 12）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp12-vacuum-bell-correlations/paper/oqp12-vacuum-bell-correlations.pdf", label: "手稿：The vacuum Bell correlation of the massive free scalar field attains the classical bound for bounded regions beyond a finite separation（PSI）" },
      { url: "https://psi.inc/research/oqp-batch-2026/", label: "成果公告：Five results on Open Quantum Problems（PSI，2026-10-23）" },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp12-vacuum-bell-correlations/paper/full-manuscript", label: "完整手稿：OQP 12 完整推导（PSI）" },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp12-vacuum-bell-correlations/README.md", label: "结果说明：定理陈述与配套文件导览（PSI）" }
    ],
    tags: ["quantum-field-theory", "bell-inequality", "vacuum-entanglement"]
  },
  {
    id: 'psi-oqp-27',
    date: '2026-10-23', title: "OQP 27：最大纠缠态上的最优 CGLMP 测量",
    event: "PSI 发布五项量子信息开放问题研究成果",
    org: 'PSI', field: 'quant-ph',
    status: ['independent', 'formal'],
    summary: "在局域维数 d 的最大纠缠态上，考察 d 结果投影测量产生的 CGLMP Bell 违反。证明 Fourier 相位测量策略在产生 Bell 不等式违反时最优，且每一种最大违反策略都与 Fourier 相位测量酉等价。",
    verification: [
      { url: "https://github.com/anshM123/IQOQI-OQP-27", label: "独立证明：Mishra 与 Senthilkumar 对 OQP 27 的另一份证明", status: 'independent' },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp27-cglmp-inequalities/lean", label: "Lean 形式化说明与证明文件（PSI，oqp-batch-2026，OQP 27）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp27-cglmp-inequalities/paper/oqp27-cglmp-inequalities.pdf", label: "手稿：The optimal CGLMP measurements on maximally entangled states（PSI）" },
      { url: "https://psi.inc/research/oqp-batch-2026/", label: "成果公告：Five results on Open Quantum Problems（PSI，2026-10-23）" },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp27-cglmp-inequalities/README.md", label: "结果说明：定理陈述与配套文件导览（PSI）" }
    ],
    tags: ["bell-inequality", "cglmp", "entanglement"]
  },
  {
    id: 'psi-oqp-38',
    date: '2026-10-23', title: "OQP 38：PPT 映射破坏纠缠所需次数",
    event: "PSI 发布五项量子信息开放问题研究成果",
    org: 'PSI', field: 'quant-ph',
    status: ['independent', 'formal'],
    summary: "PPT 映射可把纠缠态变为可分离态。证明任意 d 维系统（d≥2）上 2(d−1) 个 PPT 映射足以破坏与任意参考系统的纠缠，且每一步映射可以不同；此前 OpenAI 手稿给出两个 PPT 映射在一般情况下不够。",
    verification: [
      { url: "https://github.com/GLiuax/ppt-composition-conjecture", label: "不同证明：Liu 与 Qiao 对 PPT 组合界的另一份证明", status: 'independent' },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/ppt-composition-bound/lean", label: "Lean 形式化说明与证明文件（PSI，oqp-batch-2026，OQP 38）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/ppt-composition-bound/paper/ppt-composition-bound.pdf", label: "手稿：Entanglement Breaking after 2(d−1) PPT Maps（PSI）" },
      { url: "https://psi.inc/research/oqp-batch-2026/", label: "成果公告：Five results on Open Quantum Problems（PSI，2026-10-23）" },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/ppt-composition-bound/README.md", label: "结果说明：定理陈述与配套文件导览（PSI）" }
    ],
    tags: ["quantum-information", "ppt-map", "entanglement-breaking"]
  },
  {
    id: 'psi-oqp-43',
    date: '2026-10-23', title: "OQP 43：不可纯化的可扩展因果量子过程",
    event: "PSI 发布五项量子信息开放问题研究成果",
    org: 'PSI', field: 'quant-ph',
    status: ['formal'],
    summary: "一个量子过程即便在共享纠缠 ancilla 时仍保持关联因果性，是否总能由更大的有限维可逆过程给出。构造一个两体反例：存在可扩展因果过程，无法用更大的有限维可逆过程描述。",
    verification: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp43-extensible-causality/lean", label: "Lean 形式化说明与证明文件（PSI，oqp-batch-2026，OQP 43）", status: 'formal' }
    ],
    links: [
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp43-extensible-causality/paper/oqp43-extensible-causality.pdf", label: "手稿：An extensibly causal quantum process with no purification（PSI）" },
      { url: "https://psi.inc/research/oqp-batch-2026/", label: "成果公告：Five results on Open Quantum Problems（PSI，2026-10-23）" },
      { url: "https://github.com/physical-superintelligence/oqp-batch-2026/blob/main/oqp43-extensible-causality/README.md", label: "结果说明：定理陈述与配套文件导览（PSI）" }
    ],
    tags: ["quantum-causality", "purification", "quantum-process"]
  },
  {
    id: 'openai-qft-existence-20261026',
    date: '2026-10-26', title: "量子色动力学与标准模型完备化的存在性证明",
    event: "OpenAI 发布量子场论存在性证明并由外部小组审查",
    org: 'OpenAI', field: 'hep-th',
    status: ['human', 'independent', 'formal'],
    summary: "量子色动力学描述夸克与胶子的强相互作用，纯 Yang–Mills 理论只含胶子自相互作用。在 Balaban 构造性量子场论方法基础上，给出四维含规范场与费米子的相互作用量子场论的严格存在性结果，包括量子色动力学和包含标准模型规范场与费米子的最简单大统一完备化；其中纯 Yang–Mills 理论的存在性对应千禧年问题的一半。",
    verification: [
      { url: "https://github.com/scottnarmstrong/yang-mills-informalization/blob/main/manuscript/main.pdf", label: "人类理解手稿：Yang–Mills informalization 自然语言证明稿（Scott Armstrong / Humanise Yang–Mills，第三稿 2026-11-13，278 页；由 AI 从 Lean 代码写出并在修订中，非独立完成的人工审计）", status: 'human' },
      { url: "https://github.com/yang-mills-group/YM", label: "评审组结果与评估仓库：Lean 重建、公理审计、Comparator 检查及首份评估（Yang–Mills Working Group，2026-11-10；说明不证明质量间隙，也不证明无穷体积极限唯一）", status: 'independent' },
      { url: "https://github.com/yang-mills-group/OpenAI-YM-20261028", label: "Lean 证明代码：OpenAI 于 2026-10-28 提交、由评审组公开（yang-mills-group）", status: 'formal' }
    ],
    links: [
      { url: "https://openai.com/index/building-scientific-understanding-with-academic-communities/", label: "成果公告：Working with academic communities to build scientific understanding（OpenAI，2026-10-26）" },
      { url: "https://www.kitp.ucsb.edu/sites/default/files/3rd-Statement-About-Quantum-YangMills-Theory_Nov-9.pdf", label: "评审组第三份声明：公布代码与评估安排（KITP，2026-11-09）" }
    ],
    tags: ["quantum-field-theory", "yang-mills", "QCD", "standard-model"]
  },
  {
    id: 'psi-aaronson-ambainis-20261106',
    date: '2026-11-06', title: 'Aaronson–Ambainis 猜想的证明',
    event: 'PSI 公布 Aaronson–Ambainis 猜想相关论文与 Lean 形式化',
    org: 'PSI', field: 'quant-ph',
    status: 'formal',
    summary: "Aaronson–Ambainis 猜想关于离散超立方上有界低次多项式的有影响力变量，该猜想与随机输入下量子算法相对经典算法是否能获得指数加速有关。证明给出 Infi(f) ≥ c v^{5/2}/d^6 ≥ (v/d)^7，其中 c = 815/(125π^4) ≈ 0.0025，并给出对应的 Lean 4 形式化。",
    verification: [
      { url: "https://github.com/physical-superintelligence/aaronson-ambainis/blob/main/README.md", label: "形式化状态说明：四个最终 Lean 定理无占位符、无新增公理，并由两个独立 Lean kernel 实现复核；README 同时说明论文不是机器检查，PrintedConjecture 是否准确表达原猜想需人工阅读确认（PSI）", status: 'formal' },
      { url: "https://github.com/physical-superintelligence/aaronson-ambainis/blob/main/AaronsonAmbainis/Main.lean", label: "Lean 主定理文件：AaronsonAmbainis/Main.lean（PSI）", status: 'formal' }
    ],
    links: [
      { url: "https://psi.inc/research/aaronson-ambainis/", label: "成果公告：A proof of the Aaronson–Ambainis conjecture（PSI，2026-11-06）" },
      { url: "https://github.com/physical-superintelligence/aaronson-ambainis/blob/main/paper/aaronson_ambainis_paper.pdf", label: "论文 PDF：A proof of the Aaronson–Ambainis conjecture（PSI）" },
      { url: "https://github.com/physical-superintelligence/aaronson-ambainis", label: "项目仓库：论文、Lean 4 代码与说明（PSI）" }
    ],
    tags: ["quantum-complexity", "query-complexity", "influence", "lean"]
  },
  {
    id: 'anthropic-hawking-page-20261107',
    date: '2026-11-07', title: '弱耦合下的 Hawking–Page 相变',
    event: 'Anthropic 发布两项理论物理预印本',
    org: 'Anthropic', field: 'hep-th',
    status: 'claimed',
    summary: "Hawking–Page 相变描述含引力系统中热态与黑洞态之间的转变。对弱耦合、小宇宙情形，按 2003 年提出的量子描述计算方案完成计算；公告给出的结果是该转变在小宇宙中同样为突变。",
    verification: [],
    links: [
      { url: "https://www.anthropic.com/claude-fable-and-mythos-5-2", label: "成果公告：Theoretical physics 小节（Anthropic，2026-11）" },
      { url: "https://hexagonmath.org/2611.00175v1", label: "预印本：The Hawking-Page transition at weak coupling（Hexagon，2026-11-07）" }
    ],
    tags: ["holography", "black-hole", "hawking-page"]
  },
  {
    id: 'anthropic-modular-bootstrap-20261107',
    date: '2026-11-07', title: '大中心荷下的无自旋 modular bootstrap',
    event: 'Anthropic 发布两项理论物理预印本',
    org: 'Anthropic', field: 'hep-th',
    status: 'claimed',
    summary: "无自旋 modular bootstrap 使用模不变性与谱密度约束二维共形场论，并用于排除简化宇宙中的量子引力候选理论。在大中心荷条件下给出该约束方法的精确极限。",
    verification: [],
    links: [
      { url: "https://www.anthropic.com/claude-fable-and-mythos-5-2", label: "成果公告：Theoretical physics 小节（Anthropic，2026-11）" },
      { url: "https://hexagonmath.org/2611.00174v1", label: "预印本：The spinless modular bootstrap at large central charge（Hexagon，2026-11-07）" }
    ],
    tags: ["conformal-field-theory", "modular-bootstrap", "quantum-gravity"]
  },
  {
    id: 'openai-sm-lattice-20261115',
    date: '2026-11-15', title: "标准模型的候选非微扰格点定义",
    event: "OpenAI 科学博客发布标准模型格点定义候选构造",
    org: 'OpenAI', field: 'hep-th',
    status: ['formal'],
    summary: "标准模型的完整非微扰定义长期缺失，主要障碍是弱相互作用的手征性在晶格上会带来费米子倍增问题。在四维欧几里得晶格上，对包含标准模型的一类非阿贝尔手征规范理论，构造了 overlap 费米子的规范不变测度；在 admissible 规范场（晶格尺度场强有界）上，比较相邻晶格间距的手征投影算符给出指数局域的流，并满足 Lüscher 重构光滑规范不变费米子测度所需的整体性质。论文称其为标准模型的候选非微扰格点定义。",
    verification: [
      { url: "https://doi.org/10.5281/zenodo.23196062", label: "数学附录与 Lean 形式化记录：Mathematical companion and Lean formalization（Zenodo，2026-10）", status: 'formal' }
    ],
    links: [
      { url: "https://arxiv.org/abs/2610.09093", label: "手稿：A gauge-invariant measure for lattice chiral fermions（Nathaniel Craig，2026-10-06）" },
      { url: "https://openai.com/index/step-toward-defining-the-standard-model/", label: "成果公告：A step toward defining the Standard Model on a lattice（OpenAI Science，2026-11-15）" }
    ],
    tags: ["lattice-field-theory", "standard-model", "chiral-gauge-theory", "overlap-fermions"]
  }
];
