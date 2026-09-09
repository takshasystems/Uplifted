import svgPaths from "./svg-2ktailw7kv";
import imgSection from "./80ccefc521154b2e0e7dcba4c629ea6bb1fb7b00.png";
import imgImageWithFallbackImage from "./267240048a73f9879925db58b4753ce4f63642f6.png";

function PlaceholderForNavigation() {
  return <div className="h-[80px] relative shrink-0 w-[1520.8px]" data-name="Placeholder for Navigation" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#c0143c] text-[60px] text-center w-[679px]">A curriculum built for real life</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[52px] relative shrink-0 w-[832px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Not textbooks. Not lectures. Activities, stories, reflection, and conversation.
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] px-[32px] relative shrink-0 w-[896px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0" style={{ backgroundImage: "linear-gradient(167.6851845008022deg, rgba(192, 20, 60, 0.1) 0%, rgba(17, 17, 17, 0.1) 100%)" }} />
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 opacity-40 overflow-hidden">
          <img alt="" className="absolute h-[343.55%] left-[0.03%] max-w-none top-[-62.75%] w-full" src={imgSection} />
        </div>
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Icon">
          <path d={svgPaths.p1e119030} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#c0143c] left-0 rounded-[26843500px] size-[64px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[86.4px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[30px] whitespace-nowrap">Communication</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[341.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Express, listen, connect
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[341.325px]" data-name="Container">
      <InlineContent />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Skills Taught</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] w-[715px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Verbal communication, listening, public speaking, storytelling, presentation, non-verbal communication, emotional expression
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Character Developed</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Empathy, confidence, self-awareness, respect, honesty, emotional intelligence
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[83px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Sample Activities</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-0 rounded-[26843500px] top-0 w-[134.038px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Chinese Whisper
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[142.04px] rounded-[26843500px] top-0 w-[111.563px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Show and Tell
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[261.6px] rounded-[26843500px] top-0 w-[156.85px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Picture Composition
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[426.45px] rounded-[26843500px] top-0 w-[229.887px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Daily Communication Scenarios
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-0 rounded-[26843500px] top-[36px] w-[154.313px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Emotional Charades
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[123px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading4 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[373.33px] top-0 w-[714.675px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[289px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[32px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Icon">
          <path d={svgPaths.pc093400} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p28b2e480} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pbd22060} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p132bcf80} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8dd6d00} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p65fba00} id="Vector_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pc59ed00} id="Vector_7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f98ec0} id="Vector_8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p21a6c00} id="Vector_9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#c0143c] left-0 rounded-[26843500px] size-[64px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function InlineContent1() {
  return (
    <div className="h-[86.4px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[30px] whitespace-nowrap">Critical Thinking</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[341.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Observe, question, decide
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[341.325px]" data-name="Container">
      <InlineContent1 />
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Skills Taught</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] w-[715px]" style={{ fontVariationSettings: '"opsz" 9' }}>
          Observation, pattern recognition, problem solving, decision making, reasoning, perspective taking
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Character Developed</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Curiosity, responsibility, growth mindset, perseverance
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[83px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading7 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Sample Activities</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-0 rounded-[26843500px] top-0 w-[248.137px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`Story Analysis (Bloom's Taxonomy)`}</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[256.14px] rounded-[26843500px] top-0 w-[200.913px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Moral Dilemma Discussions
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[465.05px] rounded-[26843500px] top-0 w-[178.762px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Panchatantra Reflection
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[87px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading8 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[373.33px] top-0 w-[714.675px]" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[253px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[32px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37b568c0} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#c0143c] left-0 rounded-[26843500px] size-[64px] top-0" data-name="Container">
      <Icon2 />
    </div>
  );
}

function InlineContent2() {
  return (
    <div className="h-[86.4px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[30px] whitespace-nowrap">Collaboration</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[341.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Work together, grow together
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[341.325px]" data-name="Container">
      <InlineContent2 />
      <Heading9 />
      <Paragraph7 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Skills Taught</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[32px] relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Teamwork, friendship skills, conflict resolution, group problem solving
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading10 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Character Developed</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[32px] relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Kindness, respect, inclusion, trust, community mindset
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[83px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading11 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Sample Activities</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-0 rounded-[26843500px] top-0 w-[71.013px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Debate
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[79.01px] rounded-[26843500px] top-0 w-[125.725px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Birthday Lineup
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[212.74px] rounded-[26843500px] top-0 w-[132.525px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Common Thread
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[353.26px] rounded-[26843500px] top-0 w-[90.85px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Trust Walk
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[452.11px] rounded-[26843500px] top-0 w-[165.275px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Collective Storytelling
      </p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-0 rounded-[26843500px] top-[36px] w-[125.963px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Scavenger Hunt
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[123px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading12 />
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[373.33px] top-0 w-[714.675px]" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[265px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Container23 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[32px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin5 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Icon">
          <path d={svgPaths.p369d8300} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 24H20" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 29.3333H18.6667" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#c0143c] left-0 rounded-[26843500px] size-[64px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function InlineContent3() {
  return (
    <div className="h-[86.4px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[30px] whitespace-nowrap">Creativity</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[341.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Imagine, build, innovate
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[341.325px]" data-name="Container">
      <InlineContent3 />
      <Heading13 />
      <Paragraph10 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Skills Taught</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[32px] relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Storytelling, creative writing, drawing, imagination, innovation, idea generation
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading14 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Character Developed</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[32px] relative shrink-0 w-[714.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Courage, adaptability, creative confidence, open-mindedness
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[83px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading15 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Sample Activities</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-0 rounded-[26843500px] top-0 w-[112.488px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Handprint Art
      </p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[120.49px] rounded-[26843500px] top-0 w-[183.637px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Journey into Imagination
      </p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[312.13px] rounded-[26843500px] top-0 w-[167.875px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Time Travel Adventure
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[rgba(192,20,60,0.1)] h-[28px] left-[488px] rounded-[26843500px] top-0 w-[192.163px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#c0143c] text-[14px] top-[3.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Creating My Own Country
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[87px] relative shrink-0 w-[714.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading16 />
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[373.33px] top-0 w-[714.675px]" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[229px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container30 />
        <Container32 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[32px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-center text-white whitespace-nowrap">10 Core Character Values</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-0 rounded-[10px] top-0 w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.7px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Honesty
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[220.8px] rounded-[10px] top-0 w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.76px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kindness
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[441.6px] rounded-[10px] top-0 w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.78px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Respect
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[662.4px] rounded-[10px] top-0 w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.6px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Responsibility
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[883.2px] rounded-[10px] top-0 w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[103.38px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Empathy
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-0 rounded-[10px] top-[64px] w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.85px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Courage
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[220.8px] rounded-[10px] top-[64px] w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.7px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Curiosity
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[441.6px] rounded-[10px] top-[64px] w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.84px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Confidence
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[662.4px] rounded-[10px] top-[64px] w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.49px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Perseverance
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[48px] left-[883.2px] rounded-[10px] top-[64px] w-[204.8px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[102.43px] text-[16px] text-center text-white top-[12.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Teamwork
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[32px] relative shrink-0 w-[1152px]" data-name="Container">
      <Heading17 />
      <ContainerMargin10 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(192, 20, 60) 0%, rgb(187, 18, 58) 7.1429%, rgb(182, 17, 56) 14.286%, rgb(177, 15, 54) 21.429%, rgb(172, 14, 52) 28.571%, rgb(167, 12, 50) 35.714%, rgb(162, 10, 48) 42.857%, rgb(157, 8, 46) 50%, rgb(152, 7, 44) 57.143%, rgb(147, 5, 42) 64.286%, rgb(142, 4, 40) 71.429%, rgb(137, 3, 38) 78.571%, rgb(133, 2, 36) 85.714%, rgb(128, 1, 34) 92.857%, rgb(123, 0, 32) 100%)" }} data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <ContainerMargin9 />
      </div>
    </div>
  );
}

function Curriculum() {
  return (
    <div className="relative shrink-0 w-[1520.8px]" data-name="Curriculum">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[2348_0_0] min-h-px relative w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Curriculum />
      </div>
    </div>
  );
}

function ImageWithFallbackImage() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="ImageWithFallback (image)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallbackImage} />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <ImageWithFallbackImage />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[28px] relative shrink-0 w-[76.95px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          UpliftEd
        </p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ImageWithFallback />
        <Container53 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[36px] relative shrink-0 w-[268px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Skills for life. Character for always.
        </p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[132.012px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Rajkot, Gujarat, India
        </p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[36px] relative shrink-0 w-[268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[16px] relative size-full">
        <Icon4 />
        <Text18 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[268px]" data-name="Container">
      <Container52 />
      <Paragraph13 />
      <Container54 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Pages</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Home
        </p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          About
        </p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Our Curriculum
        </p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          How It Works
        </p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Our Journey
        </p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Impact
        </p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[176px] relative shrink-0 w-[268px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[316px] top-0 w-[268px]" data-name="Container">
      <Heading18 />
      <List />
    </div>
  );
}

function Heading19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Involved</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          For Schools
        </p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>{`For NGOs & CSR`}</p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          For Volunteers
        </p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[268px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          For Donors
        </p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[120px] relative shrink-0 w-[268px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
        <ListItem9 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#c0143c] h-[36px] left-0 rounded-[26843500px] top-[16px] w-[135.238px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[16px] text-[14px] text-white top-[7.8px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Partner With Us
      </p>
    </div>
  );
}

function InlineContent4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[632px] top-0 w-[268px]" data-name="Container">
      <Heading19 />
      <List1 />
      <InlineContent4 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Connect</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p4fdb300} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39557800} id="Vector_2" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.5 6.5H17.51" id="Vector_3" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p26db3300} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 15L15 12L10 9V15Z" id="Vector_2" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p2bf8f980} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p311e6900} id="Vector_2" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[56px] relative shrink-0 w-[268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[16px] relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function InlineContent5() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] top-[3px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Contact Us
        </p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[948px] top-0 w-[268px]" data-name="Container">
      <Heading20 />
      <Container58 />
      <InlineContent5 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container51 />
        <Container55 />
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          © 2026 UpliftEd. Building skills that last a lifetime.
        </p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#364153] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph14 />
    </div>
  );
}

function ContainerMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] py-[64px] relative size-full">
        <Container50 />
        <ContainerMargin11 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#111] relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallbackImage} />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#111] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          UpliftEd
        </p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#c0143c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          LET EVERY CHILD DREAM.
        </p>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="relative shrink-0 w-[143.463px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ImageWithFallback1 />
        <Navigation1 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.85px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#111] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Home
        </p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.65px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#111] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          About
        </p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[101.2px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#c0143c] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Our Curriculum
        </p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.925px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#111] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          How It Works
        </p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.2px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#111] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Our Journey
        </p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.513px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#111] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Impact
        </p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.875px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#111] text-[14px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Contact
        </p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[#c0143c] h-[44px] relative rounded-[26843500px] shrink-0 w-[102.338px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] left-[24px] text-[16px] text-white top-[10.6px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Donate
        </p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <Link4 />
        <Container63 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] left-0 top-[0.8px] w-[1520.8px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container60 />
      </div>
    </div>
  );
}

function RootLayout() {
  return (
    <div className="bg-[#fafaf7] h-[2859.8px] min-h-[681.5999755859375px] relative shrink-0 w-full" data-name="RootLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <PlaceholderForNavigation />
        <MainContent />
        <Footer />
        <Navigation />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[412px] relative shrink-0 w-[1521px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <RootLayout />
      </div>
    </div>
  );
}

export default function Uplifted() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="uplifted">
      <Body />
    </div>
  );
}