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
   status  验证状态，只能用以下四个值之一：
             independent  独立第三方验证
             formal       Lean / Coq 等形式化验证
             human        人类理解：人能读懂并跟进结果，但未独立核验
             claimed      仅宣称，无任何外部核验
   summary      成果具体做出了什么，只写结果、方法、数值，不写评价
   verification 验证来源数组，每项 { url, label }：
                 url   验证方公布的材料的公开链接
                 label 描述文字，说明是谁发布的什么材料
                 一条验证也用数组；label 写清是独立发布还是附载于成果方页面
   links        相关链接数组，每项 { url, label }：公告、论文、数据页等。
                 label 写清是什么材料、谁发布的，不要只放光秃秃的链接。
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
  }
];
