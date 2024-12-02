(function() {
    var type_impls = Object.fromEntries([["mistralrs",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Branch%3CS%3E\" class=\"impl\"><a href=\"#impl-Branch%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.map_mask\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.map_mask\" class=\"fn\">map_mask</a>&lt;F, T&gt;(&amp;self, f: F) -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;T&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;S</a>) -&gt; T,</div></h4></section><section id=\"method.find_splice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.find_splice\" class=\"fn\">find_splice</a>(&amp;self, sampled: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Splice.html\" title=\"struct mistralrs::llguidance::toktrie::Splice\">Splice</a>&gt;</h4></section><section id=\"method.spliced\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.spliced\" class=\"fn\">spliced</a>(&amp;self, sampled: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Splice.html\" title=\"struct mistralrs::llguidance::toktrie::Splice\">Splice</a></h4></section><section id=\"method.unconditional_splice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.unconditional_splice\" class=\"fn\">unconditional_splice</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Splice.html\" title=\"struct mistralrs::llguidance::toktrie::Splice\">Splice</a>&gt;</h4></section><section id=\"method.has_backtrack\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.has_backtrack\" class=\"fn\">has_backtrack</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.has_ff_tokens\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.has_ff_tokens\" class=\"fn\">has_ff_tokens</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.stop\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.stop\" class=\"fn\">stop</a>() -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;</h4></section><section id=\"method.is_stop\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.is_stop\" class=\"fn\">is_stop</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.splice\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.splice\" class=\"fn\">splice</a>(backtrack: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u32.html\">u32</a>, ff_tokens: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u32.html\">u32</a>&gt;) -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;</h4></section><section id=\"method.noop\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.noop\" class=\"fn\">noop</a>() -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;</h4></section><section id=\"method.sample\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"mistralrs/llguidance/toktrie/struct.Branch.html#tymethod.sample\" class=\"fn\">sample</a>(set: S, temperature: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.f32.html\">f32</a>&gt;) -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;</h4></section></div></details>",0,"mistralrs::llguidance::toktrie::StepResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Branch%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Branch%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","mistralrs::llguidance::toktrie::StepResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Branch%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Branch%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","mistralrs::llguidance::toktrie::StepResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Branch%3CS%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Branch%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.213/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","mistralrs::llguidance::toktrie::StepResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Branch%3CS%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-Branch%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"mistralrs/llguidance/toktrie/struct.Branch.html\" title=\"struct mistralrs::llguidance::toktrie::Branch\">Branch</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.213/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","mistralrs::llguidance::toktrie::StepResult"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[14709]}